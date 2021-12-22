import JsonResponse from '../../endpoint/JsonResponse';
import v1 from '../..';
import Resource from '@teckboard-api/core/resource';
import AuthUser from './interfaces/AuthUser';
export default class User extends Resource<v1> {
    private uri = '/user';

    get baseUri(): string {
        return this.uri;
    }

    get = async (): Promise<AuthUser> => {
        const response = await this.api.http.get<JsonResponse<AuthUser>>(
            this.uri,
        );

        return response.data.data;
    };

    update = async (user: Partial<AuthUser>): Promise<AuthUser> => {
        const response = await this.api.http.post<JsonResponse<AuthUser>>(
            this.uri,
            user,
        );
        return response.data.data;
    };

    delete = async (): Promise<boolean> => {
        const response = await this.api.http.delete<JsonResponse<AuthUser>>(
            this.uri,
        );
        return response.status == 200;
    };
}
