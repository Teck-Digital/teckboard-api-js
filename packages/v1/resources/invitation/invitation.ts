import Resource from '@teckboard-api/core/resource';
import JsonResponse from '../../endpoint/JsonResponse';
import v1 from '../../index';
import InvitationModel from '../../models/Invitation';
import { Invitation as IInvitation } from './interfaces';
export default class Invitation extends Resource<v1> {
    private uri = '/invitation';

    get baseUri(): string {
        return this.uri;
    }

    get = async (token: string): Promise<IInvitation> => {
        const response = await this.api.http.get<JsonResponse<IInvitation>>(
            this.uri + '/' + token,
        );

        return new InvitationModel(response.data.data);
    };
}
