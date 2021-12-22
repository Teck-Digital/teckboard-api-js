import PaginationResource from '@teckboard-api/v1/endpoint/pagination/PaginationResource';
import Resource from '@teckboard-api/core/resource';
import admin from '../..';
import PaginationResponse from '@teckboard-api/v1/endpoint/pagination/PaginationResponse';
import { Incident } from './interfaces';
export default class Incidents
    extends Resource<admin>
    implements PaginationResource<Incident>
{
    private uri = '/incidents';
    get baseUri() {
        return this.uri;
    }

    getPage = async (chunk: number): Promise<PaginationResponse<Incident>> => {
        const response = await this.api.http.get<PaginationResponse<Incident>>(
            this.uri,
            {
                params: {
                    page: chunk,
                },
            },
        );

        return response.data;
    };

    getAll = async (): Promise<PaginationResponse<Incident>> => {
        const response = await this.api.http.get<PaginationResponse<Incident>>(
            this.uri,
        );

        return response.data;
    };

    get(id: string): Promise<Incident> {
        throw new Error('Method not implemented.');
    }
}
