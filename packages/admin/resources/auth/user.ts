import JsonResponse from '@teckboard-api/v1/endpoint/JsonResponse';
import { Resource } from '@teckboard-api/core';
import AuthUser from './interfaces/AuthUser';
import admin from '../..';
export default class User extends Resource<admin> {
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
