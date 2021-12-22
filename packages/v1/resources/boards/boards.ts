import JsonResponse from '../../endpoint/JsonResponse';
import EndpointResource from '../../endpoint/EndpointResource';
import Board from './interfaces/Board';
import Resource from '@teckboard-api/core/resource';
import v1 from '../..';

export default class Boards
    extends Resource<v1>
    implements EndpointResource<Board>
{
    private uri = '/boards';

    get baseUri(): string {
        return this.uri;
    }

    get = async (id: string): Promise<Board> => {
        const response = await this.api.http.get<JsonResponse<Board>>(
            this.uri + '/' + id,
        );

        return response.data.data;
    };

    update = async (board: Partial<Board>): Promise<Board> => {
        const response = await this.api.http.post<JsonResponse<Board>>(
            this.uri + '/' + board.id,
            board,
        );

        return response.data.data;
    };
}
