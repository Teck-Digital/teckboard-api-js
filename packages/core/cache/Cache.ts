/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import localforage from 'localforage';
import moment from 'moment';

export interface CachedData {
    timestamp: string;
    maxAge: number;
    data: string;
}

export interface CacheConfig {
    keyPrefix: string;
    cacheDuration: number;
    exlude: string[];
}
export default class Cache {
    /**
     * Initializes the Cache storage (localforage WEBSql)
     *
     * @returns Promise to be resolved
     */
    public static async init(): Promise<boolean> {
        return localforage.ready().then(() =>
            localforage.config({
                driver: localforage.WEBSQL, // Force WebSQL; same as using setDriver()
                name: 'teckboard',
                version: 1.0,
                size: 4980736, // Size of database, in bytes. WebSQL-only for now.
                storeName: 'admin', // Should be alphanumeric, with underscores.
                description: 'some description',
            }),
        );
    }

    /**
     * Sets the cache up and injects axios handlers
     *
     * @param http Axios instance
     * @param config cache config
     */
    public static setup(
        http: AxiosInstance,
        config: CacheConfig = {
            cacheDuration: 2,
            exlude: [],
            keyPrefix: 'axios_cache',
        },
    ): void {
        http.interceptors.request.use((request) =>
            Cache.requestHandler(request, config),
        );
        http.interceptors.response.use(
            (response) => Cache.responseHandler(response, config),
            (error) => Cache.errorHandler(error),
        );
    }

    /**
     * Stores data for given url in cache
     *
     * @param key serialized url
     * @param value to be cached data
     * @param config cache config
     * @returns a promise that may be resolved with item key see `localforage docs`
     */

    public static async store(
        key: string,
        value: unknown,
        config: CacheConfig,
    ): Promise<string> {
        const now = moment().toISOString();
        const data = {
            timestamp: now,
            maxAge: config.cacheDuration,
            data: value,
        };
        return localforage.setItem(
            config.keyPrefix + '_' + key,
            JSON.stringify(data),
        );
    }

    /**
     * Checks cache for url and invalidates if exceeded maxAge
     *
     * @param key serialized url
     * @param config cache config
     * @returns whether url exists in cache
     */
    public static async isCached(
        key: string,
        config: CacheConfig,
    ): Promise<boolean> {
        const retrieved = await localforage.getItem(
            config.keyPrefix + '_' + key,
        );
        if (!retrieved) return false;

        const data = JSON.parse(retrieved as string) as CachedData;

        if (
            moment()
                .subtract(data.maxAge, 'minutes')
                .isBefore(moment(data.timestamp))
        ) {
            return true;
        } else {
            // console.log('deleting key: ' + key);
            localforage.removeItem(key);
            return false;
        }
    }

    /**
     * Gets item for given key from the cache
     *
     * @param key serialized url
     * @param config cache config
     * @returns data
     */
    public static async getItem<T>(
        key: string,
        config: CacheConfig,
    ): Promise<T | null> {
        if (await Cache.isCached(key, config)) {
            const retrieved = await localforage.getItem(
                config.keyPrefix + '_' + key,
            );
            if (!retrieved) return null;

            const data = JSON.parse(retrieved as string) as CachedData;

            return JSON.parse(data.data);
        }
        return null;
    }

    /**
     * Serializes url for cache storage
     *
     * @param url The url to be serialized
     * @param params The params if existing
     * @returns The serialized url string or null
     */
    private static serializeUrl(
        url: AxiosRequestConfig<any>['url'],
        params: AxiosRequestConfig<any>['params'],
    ): string | null {
        if (url) {
            if (params) {
                return url + JSON.stringify(params);
            }
            return url;
        }
        return null;
    }

    /**
     * Stores the requests response data in cache
     *
     * @param response The axios response
     * @param config The cache config
     * @returns axios response
     */
    public static async responseHandler(
        response: AxiosResponse<any>,
        config: CacheConfig,
    ): Promise<AxiosResponse<any>> {
        if (
            (response.config.method === 'GET' || 'get') &&
            response.config.url
        ) {
            const key = Cache.serializeUrl(
                response.config.url,
                response.config.params,
            );
            // (key);
            if (key != null) {
                // console.log('storing in cache');
                await Cache.store(key, JSON.stringify(response.data), config);
            }
        }
        return response;
    }

    /**
     * The error handler that resolves the request
     * if it was rejected due to cached data
     *
     * @param error
     * @returns Resolves or rejects the error
     */
    public static errorHandler(error: any): Promise<any> {
        if (error?.headers?.cached == 'true') {
            // console.log('got cached data in response, serving it directly');
            // console.log(error.data);
            return Promise.resolve(error);
        }
        return Promise.reject(error);
    }

    /**
     * Axios request handler to be inserted as a request interceptor
     *
     * @param request The axios request
     * @param config The cache config
     * @returns Either the request or a promise rejection
     */
    public static async requestHandler(
        request: AxiosRequestConfig,
        config: CacheConfig,
    ): Promise<AxiosRequestConfig<unknown>> {
        if (
            request.method == 'GET' ||
            (request.method == 'get' &&
                !config.exlude.includes(request.url as string))
        ) {
            const key = Cache.serializeUrl(request.url, request.params);
            if (key && (await Cache.isCached(key, config))) {
                // console.log('serving cached data');
                if (request.headers) {
                    request.headers.cached = 'true';
                }
                request.data = await Cache.getItem(key, config);
                return Promise.reject(request);
            }
        }
        return request;
    }

    /**
     * Clears the request for a given Resource.
     * If no url is given clears entire cache.
     *
     * @returns A promise which can be resolved
     */
    public static async flush(url?: string): Promise<void | unknown[]> {
        if (url) {
            const keys = await localforage.keys();
            const promises: Promise<void>[] = [];
            keys.forEach((key) => {
                if (key.includes(url)) {
                    promises.push(localforage.removeItem(key));
                }
            });
            return Promise.all(promises);
        }
        return localforage.clear();
    }
}
