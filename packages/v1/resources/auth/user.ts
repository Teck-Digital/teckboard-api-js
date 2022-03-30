import JsonResponse from '../../endpoint/JsonResponse';
import v1 from '../../index';
import Resource from '@teckboard-api/core/resource';

import AuthUser from '../../models/AuthUser';
import { AxiosResponse } from 'axios';
import Icon from '../../interfaces/Icon';
import { IAuthUser } from './interfaces';

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

    updateModel = async (
        diff: Partial<IAuthUser>,
    ): Promise<AxiosResponse<JsonResponse<IAuthUser>>> => {
        let response: AxiosResponse<JsonResponse<IAuthUser>>;
        if (diff.icon && !(diff.icon as Icon).id) {
            const formData = new FormData();
            formData.append('_method', 'patch');

            formData.append('icon', diff.icon as Blob);

            response = await this.api.http.post(this.uri, formData);
        } else {
            response = await this.api.http.post<JsonResponse<IAuthUser>>(
                this.uri,
                { ...diff, _method: 'patch' },
            );
        }
        return response;
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
