import Resource from '@teckboard-api/core/resource';
import EndpointResource from '../../endpoint/EndpointResource';
import JsonResponse from '../../endpoint/JsonResponse';
import v1 from '../../index';
import BoardModel from '../../models/Board';
import Board from './interfaces/Board';

export default class Boards
    extends Resource<v1>
    implements EndpointResource<Board>
{
    private uri = '/boards';

    get baseUri(): string {
        return this.uri;
    }

    get = async (id: string): Promise<BoardModel> => {
        const response = await this.api.http.get<JsonResponse<Board>>(
            this.uri + '/' + id,
        );

        return new BoardModel(response.data.data);
    };
    getBySlug = async (
        companySlug: string,
        boardSlug: string,
    ): Promise<Board> => {
        const response = await this.api.http.get<JsonResponse<Board>>(
            this.uri + '/by-slug/' + companySlug + '/' + boardSlug,
        );

        return new BoardModel(response.data.data);
    };
}
