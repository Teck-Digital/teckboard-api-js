import Resource from '../endpoint/JsonResponse';
import PaginationResponse from '../endpoint/pagination/PaginationResponse';
import v1 from '../index';
import Icon from '../interfaces/Icon';
import { Board as IBoard, BoardUser, Channel } from '../resources/boards';
import Announcement from '../resources/boards/interfaces/Announcement';
import { BoardChatSettings } from '../resources/boards/interfaces/Board';
import ShardRole from '../resources/boards/interfaces/ShardRole';
import { default as Content, default as IContent } from './Content';
import Model from './default/ResourceModel';

/**
 * Implementation example for V2
 */
export default class Board extends Model<IBoard> implements IBoard {
    id!: string;
    name!: string;
    color_scheme!: string;
    channel!: Channel;
    owner!: boolean;
    owner_id!: string;
    company_id!: string;
    icon?: Icon | undefined;
    latest_content!: string;
    roles!: ShardRole[];
    settings!: BoardChatSettings;
    slug!: string;
    uri!: string;
    url!: string;
    user_role!: ShardRole;
    created_at!: string;
    updated_at!: string;

    constructor(resource: IBoard) {
        super(resource, {
            endpoints: v1.getInstance().boards.baseUri + '/' + resource.id,
        });
    }

    public static collection(boards: IBoard[]): Board[] {
        return boards.map((b) => new Board(b));
    }

    public async getContents(): Promise<Content[]> {
        const response = await this._api.http.get<Resource<IContent[]>>(
            this._endpoints.get + '/contents',
        );
        return Content.collection(response.data.data);
    }

    getUsers = async (): Promise<BoardUser[]> => {
        const response = await this._api.http.get<Resource<BoardUser[]>>(
            this._endpoints.get + '/users',
        );
        return response.data.data;
    };

    getInvitations = async (): Promise<BoardUser[]> => {
        const response = await this._api.http.get<Resource<BoardUser[]>>(
            this._endpoints.get + '/users',
        );
        return response.data.data;
    };

    getAnnouncements = async (
        chunk = 1,
    ): Promise<PaginationResponse<Announcement[]>> => {
        const response = await this._api.http.get<
            PaginationResponse<Announcement[]>
        >(this._endpoints.get + '/announcements', {
            params: {
                page: chunk,
            },
        });
        return response.data;
    };
}
