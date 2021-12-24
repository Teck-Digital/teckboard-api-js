import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Cache } from '@teckboard-api/core';
import ApiInterface from '@teckboard-api/core/ApiInterface';
import User from './resources/auth';
import Boards from './resources/boards/boards';
import Invitation from './resources/invitation/invitation';

export interface V1Config {
    endpoint: string;
    cacheEnabled: boolean;
    axiosConfig: AxiosRequestConfig;
}
export default class v1 implements ApiInterface {
    private _endpoint!: string;

    public http!: AxiosInstance;

    public user!: User;

    public boards!: Boards;

    public invitation!: Invitation;

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

            this.http = axios.create({
                ...config.axiosConfig,
                baseURL: this._endpoint,
                withCredentials: true,
            });

            this.user = new User(this);
            this.boards = new Boards(this);
            this.invitation = new Invitation(this);
            v1._instance = this;
        }
        return v1._instance;
    }
}
