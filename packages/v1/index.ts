import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Cache } from '@teckboard-api/core';
import ApiInterface from '@teckboard-api/core/ApiInterface';
import User from './resources/auth';
import Boards from './resources/boards/boards';

export interface V1Config {
    endpoint: string;
    cacheEnabled: boolean;
    axiosConfig: AxiosRequestConfig;
}
export default class v1 implements ApiInterface {
    private endpoint!: string;

    public http!: AxiosInstance;

    public user!: User;

    public boards!: Boards;

    private static _instance: v1;

    constructor(config: V1Config) {
        this.endpoint = config.endpoint;
        if (config.cacheEnabled) {
            Cache.setup(this.http);
        }

        this.http = axios.create({
            ...config.axiosConfig,
            baseURL: this.endpoint,
            withCredentials: true,
        });

        this.user = new User(this);
        this.boards = new Boards(this);
    }
}

export * from './resources/boards';
export * from './resources/auth';
export * from './resources/contents';
