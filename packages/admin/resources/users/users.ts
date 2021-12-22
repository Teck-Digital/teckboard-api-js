import PaginationResource from '../../../v1/endpoint/pagination/PaginationResource';
import User from './interfaces/User';
import Resource from '../../../core/resource';
import admin from '../..';
import PaginationResponse from '../../../v1/endpoint/pagination/PaginationResponse';
import JsonResponse from '../../../v1/endpoint/JsonResponse';
export default class Users
    extends Resource<admin>
    implements PaginationResource<User>
{
    private uri = '/users';

    get baseUri(): string {
        return this.uri;
    }

    getPage = async (chunk: number): Promise<PaginationResponse<User>> => {
        const response = await this.api.http.get<PaginationResponse<User>>(
            this.uri,
            {
                params: {
                    page: chunk,
                },
            },
        );

        return response.data;
    };

    async getAll(): Promise<PaginationResponse<User>> {
        const response = await this.api.http.get<PaginationResponse<User>>(
            this.uri,
        );

        return response.data;
    }

    async get(id: string): Promise<User> {
        const response = await this.api.http.get<JsonResponse<User>>(
            this.uri + '/' + id,
        );
        return response.data.data;
    }
}
