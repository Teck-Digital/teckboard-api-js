import Model from './default/ResourceModel';
import { AuthUser as IAuthUser } from '../resources/auth';
import Icon from '../interfaces/Icon';
import { UserSettings } from '../resources/auth/interfaces/AuthUser';
import v1 from '..';
import Board from './Board';
import { Board as IBoard } from '../resources/boards';
import JsonResponse from '../endpoint/JsonResponse';
import Notification from './Notification';
import { Notification as INotification } from '../resources/notifications';
import Pagination from './default/Pagination';
import PaginationResponse from '../endpoint/pagination/PaginationResponse';

export default class AuthUser extends Model<IAuthUser> implements IAuthUser {
    id!: string;
    email!: string;
    firstname!: string;
    name!: string;
    status!: number;
    verified!: boolean;
    settings!: UserSettings;
    icon?: Icon | undefined;

    notifications?: Notification[];
    boards?: Board[];

    constructor(resource: IAuthUser) {
        super(resource, {
            endpoints: v1.getInstance().user.baseUri,
        });
    }

    async getBoards(): Promise<Board[]> {
        const response = await this._api.http.get<JsonResponse<IBoard[]>>(
            this._endpoints.get + '/boards',
        );
        this.boards = Board.collection(response.data.data);
        return this.boards;
    }
    async getNotifications(): Promise<
        Pagination<Notification, INotification<unknown>>
    > {
        const response = await this._api.http.get<
            PaginationResponse<INotification<unknown>>
        >(this._endpoints.get + '/notifications?chunk=1');
        return new Pagination(response.data, Notification);
    }
}
