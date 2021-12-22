import { Incident } from './interfaces/Incident';
import PaginationResource from '../../../v1/endpoint/pagination/PaginationResource';
import Resource from '../../../core/resource';
import admin from '../..';
import PaginationResponse from '../../../v1/endpoint/pagination/PaginationResponse';
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
