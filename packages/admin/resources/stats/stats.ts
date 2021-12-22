import Resource from '../../../core/resource';
import admin from '../..';
import UserStats from './interfaces/UserStats';
export default class Stats extends Resource<admin> {
    private uri = '/stats';

    get baseUri(): string {
        return this.uri;
    }

    user = async (): Promise<UserStats> => {
        const response = await this.api.http.get<UserStats>(this.uri + '/user');

        return response.data;
    };
}
