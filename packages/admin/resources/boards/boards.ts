import PaginationResource from '../../../v1/endpoint/pagination/PaginationResource';
import PaginationResponse from '../../../v1/endpoint/pagination/PaginationResponse';
import { Board } from '../../../v1/resources/boards';
import JsonResponse from '../../../v1/endpoint/JsonResponse';
import Resource from '../../../core/resource';
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
