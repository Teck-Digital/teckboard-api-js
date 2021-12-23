import JsonResponse from '../../endpoint/JsonResponse';
import EndpointResource from '../../endpoint/EndpointResource';
import Board from './interfaces/Board';
import Resource from '@teckboard-api/core/resource';
import v1 from '../../index';
import { Content } from '../contents';
import BoardModel from '../../models/Board';

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

        return new BoardModel(response.data.data, this.api);
    };
    getBySlug = async (
        companySlug: string,
        boardSlug: string,
    ): Promise<Board> => {
        const response = await this.api.http.get<JsonResponse<Board>>(
            this.uri + '/by-slug/' + companySlug + '/' + boardSlug,
        );

        return response.data.data;
    };

    getContents = async (id: string): Promise<Content[]> => {
        const response = await this.api.http.get<JsonResponse<Content[]>>(
            this.uri + '/' + id + '/contents',
        );

        return response.data.data;
    };

    update = async (board: Partial<Board>): Promise<Board> => {
        const response = await this.api.http.patch<JsonResponse<Board>>(
            this.uri + '/' + board.id,
            board,
        );

        return response.data.data;
    };
}
