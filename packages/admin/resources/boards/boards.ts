import PaginationResource from '@teckboard-api/v1/endpoint/pagination/PaginationResource';
import PaginationResponse from '@teckboard-api/v1/endpoint/pagination/PaginationResponse';
import { Board } from '@teckboard-api/v1/resources/boards';
import JsonResponse from '@teckboard-api/v1/endpoint/JsonResponse';
import Resource from '@teckboard-api/core/resource';
import admin from '../..';
export default class Boards
    extends Resource<admin>
    implements PaginationResource<Board>
{
    private uri = '/boards';

    get baseUri(): string {
        return this.uri;
    }

    getPage = async (chunk: number): Promise<PaginationResponse<Board>> => {
        const response = await this.api.http.get<PaginationResponse<Board>>(
            this.uri,
            {
                params: {
                    page: chunk,
                },
            },
        );

        return response.data;
    };

    async getAll(): Promise<PaginationResponse<Board>> {
        const response = await this.api.http.get<PaginationResponse<Board>>(
            this.uri,
        );

        return response.data;
    }

    get = async (id: string): Promise<Board> => {
        const response = await this.api.http.get<JsonResponse<Board>>(
            this.uri + '/' + id,
        );

        return response.data.data;
    };
}
