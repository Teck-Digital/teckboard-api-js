import JsonResponse from '@teckboard-api/v1/endpoint/JsonResponse';
import PaginationResource from '@teckboard-api/v1/endpoint/pagination/PaginationResource';
import PaginationResponse from '@teckboard-api/v1/endpoint/pagination/PaginationResponse';
import Resource from '@teckboard-api/core/resource';

import Company from './interfaces/Company';
import admin from '../..';
export default class Companies
    extends Resource<admin>
    implements PaginationResource<Company>
{
    private uri = '/companies';

    get baseUri() {
        return this.uri;
    }

    getPage = async (chunk: number): Promise<PaginationResponse<Company>> => {
        const response = await this.api.http.get<PaginationResponse<Company>>(
            this.uri,
            {
                params: {
                    page: chunk,
                },
            },
        );

        return response.data;
    };

    async getAll(): Promise<PaginationResponse<Company>> {
        const response = await this.api.http.get<PaginationResponse<Company>>(
            this.uri,
        );

        return response.data;
    }

    get = async (id: string): Promise<Company> => {
        const response = await this.api.http.get<JsonResponse<Company>>(
            this.uri + '/' + id,
        );

        return response.data.data;
    };
}
