import JsonResponse from '../../endpoint/JsonResponse';
import EndpointResource from '../../endpoint/EndpointResource';
import Content from './interfaces/Content';
import Resource from '@teckboard-api/core/resource';
import v1 from '../../index';

export default class Contents
    extends Resource<v1>
    implements EndpointResource<Content>
{
    private uri = '/boards';

    get baseUri(): string {
        return this.uri;
    }

    get = async (id: string): Promise<Content> => {
        const response = await this.api.http.get<JsonResponse<Content>>(
            this.uri + '/' + id,
        );

        return response.data.data;
    };

    update = async (board: Partial<Content>): Promise<Content> => {
        const response = await this.api.http.post<JsonResponse<Content>>(
            this.uri + '/' + board.id,
            board,
        );

        return response.data.data;
    };
}
