import JsonResponse from '../endpoint/JsonResponse';
import v1 from '../index';
import { Board as IBoard } from '../resources/boards';
import IInvitation from '../resources/invitation/interfaces/Invitation';
import Model from './default/Model';

/**
 * Implementation example for V2
 */
export default class Invitation
    extends Model<IInvitation>
    implements IInvitation
{
    id!: string;
    invitable!: IBoard;
    invitable_type!: 'board';
    token!: string;
    name!: string | null;
    email!: string | null;
    url!: string;
    expired!: boolean;
    expire_date!: string;
    updated_at!: string;
    created_at!: string;

    private readonly enpoint: string;

    constructor(resource: IInvitation) {
        super(resource);
        this.enpoint = v1.getInstance().endpoint + '/invitation/' + this.token;
    }

    async approve(): Promise<IBoard> {
        const response = await this._api.http.post<JsonResponse<IBoard>>(
            this.enpoint,
        );

        return response.data.data;
    }
}
