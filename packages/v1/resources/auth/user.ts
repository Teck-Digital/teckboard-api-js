import JsonResponse from '../../endpoint/JsonResponse';
import v1 from '../../index';
import Resource from '@teckboard-api/core/resource';
import IAuthUser from './interfaces/AuthUser';
import AuthUser from '../../models/AuthUser';

export default class User extends Resource<v1> {
    private uri = '/user';

    get baseUri(): string {
        return this.uri;
    }

    get = async (): Promise<AuthUser> => {
        const response = await this.api.http.get<JsonResponse<IAuthUser>>(
            this.uri,
        );

        return new AuthUser(response.data.data);
    };

    update = async (user: Partial<AuthUser>): Promise<AuthUser> => {
        const response = await this.api.http.post<JsonResponse<IAuthUser>>(
            this.uri,
            { ...user, _method: 'patch' },
        );
        return new AuthUser(response.data.data);
    };

    delete = async (): Promise<boolean> => {
        const response = await this.api.http.delete<JsonResponse<IAuthUser>>(
            this.uri,
        );
        return response.status == 200;
    };
}
