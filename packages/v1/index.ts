import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Cache } from '@teckboard-api/core';
import ApiInterface from '@teckboard-api/core/ApiInterface';
import User from './resources/auth';
import Boards from './resources/boards/boards';
import Invitation from './resources/invitation/invitation';
import { Notifications } from './resources/notifications';
import { merge } from 'lodash';
import Echo from 'laravel-echo';
import Socketio from 'socket.io-client';

export interface V1Config {
    endpoint: string;
    cacheEnabled: boolean;
    axiosConfig?: AxiosRequestConfig;
    bearerToken?: string;
    socketEnabled?: boolean;
    socketPort?: number;
    socketHost?: string;
}

export default class v1 implements ApiInterface {
    private _endpoint!: string;

    public http!: AxiosInstance;

    public user!: User;

    public boards!: Boards;

    public invitation!: Invitation;

    public notifications!: Notifications;

    public socket!: Echo;

    private static _instance: v1;

    public get endpoint(): string {
        return this._endpoint;
    }

    constructor(config: V1Config) {
        if (!v1._instance) {
            this._endpoint = config.endpoint;
            if (config.cacheEnabled) {
                Cache.setup(this.http);
            }

            const axiosConfig: AxiosRequestConfig = merge(config.axiosConfig, {
                baseURL: this._endpoint,
                withCredentials: true,
            });
            if (config.bearerToken) {
                axiosConfig.headers = {
                    ...axiosConfig.headers,
                    Authorization: 'Bearer ' + config.bearerToken,
                };
            }

            this.http = axios.create(axiosConfig);

            this.user = new User(this);
            this.boards = new Boards(this);
            this.invitation = new Invitation(this);
            this.notifications = new Notifications(this);
            if (config.socketEnabled) {
                this.socket = new Echo({
                    broadcaster: 'socket.io',
                    client: Socketio,
                    host: config.socketHost + ':' + config.socketPort,
                    auth: {
                        headers: {
                            Authorization: 'Bearer ' + config.bearerToken,
                            Accept: 'application/json',
                        },
                    },
                });
            }
            v1._instance = this;
        }
        return v1._instance;
    }

    public static getInstance(): v1 {
        if (!this._instance) throw new Error('Api must be initiated first.');
        return this._instance;
    }
}
