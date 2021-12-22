import axios, { AxiosInstance } from 'axios';
import ApiInterface from '@teckboard-api/core/ApiInterface';
import Incidents from './resources/incidents/incidents';
import Cache from '@teckboard-api/core/cache/Cache';
import Companies from './resources/companies/companies';
import Stats from './resources/stats/stats';
import Boards from './resources/boards/boards';
import User from './resources/auth';
import Users from './resources/users/users';
export interface V1Config {
    endpoint: string;
}
export default class admin implements ApiInterface {
    private endpoint!: string;

    public http!: AxiosInstance;

    public incidents!: Incidents;

    public user!: User;

    public users!: Users;

    public stats!: Stats;

    public boards!: Boards;

    public companies!: Companies;

    public check!: number;

    private static _instance: admin;

    constructor(config: V1Config) {
        if (!admin._instance) {
            this.endpoint = config.endpoint;

            this.http = axios.create({
                baseURL: this.endpoint,
                withCredentials: true,
            });

            Cache.setup(this.http);

            this.user = new User(this);
            this.users = new Users(this);
            this.stats = new Stats(this);
            this.boards = new Boards(this);
            this.companies = new Companies(this);
            this.incidents = new Incidents(this);

            admin._instance = this;
        }
        return admin._instance;
    }
}
export * from './resources/auth';
export * from './resources/contents';
export * from './resources/companies';
export * from './resources/stats';
export * from './resources/incidents';
