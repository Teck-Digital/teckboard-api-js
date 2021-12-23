import Icon from '../interfaces/Icon';

import { Board as IBoard, BoardUser, Channel } from '../resources/boards';
import { BoardChatSettings } from '../resources/boards/interfaces/Board';
import Content from './Content';
import v1 from '../index';
import Resource from '../endpoint/JsonResponse';
import ShardRole from '../resources/boards/interfaces/ShardRole';
import IContent from './Content';
import { differenceWith, fromPairs, isEqual, pick } from 'lodash';
import { AxiosResponse } from 'axios';

/**
 * Implementation example for V2
 */
export default class Board implements IBoard {
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

    private readonly original: IBoard;

    private readonly _endpoint: string;

    constructor(board: IBoard, private readonly _api: v1) {
        Object.assign(this, board);
        this.original = board;
        this._endpoint = this._api.boards.baseUri + '/' + this.id;
    }

    public async save(): Promise<AxiosResponse<Resource<IBoard>>> {
        const oldEntries = Object.entries(this.original);
        const newBoard = pick(this, Object.keys(this.original));
        const newEntries = Object.entries(newBoard);
        const diff = differenceWith(newEntries, oldEntries, isEqual);
        const diffBoard = fromPairs(diff);
        return this._api.http.patch<Resource<IBoard>>(
            this._endpoint,
            diffBoard,
        );
    }
    public async getContents(): Promise<Content[]> {
        const response = await this._api.http.get<Resource<IContent[]>>(
            this._endpoint + '/contents',
        );
        return Content.collection(response.data.data, this._api);
    }

    getUsers = async (): Promise<BoardUser[]> => {
        const response = await this._api.http.get<Resource<BoardUser[]>>(
            this._endpoint + '/users',
        );
        return response.data.data;
    };

    getInvitations = async (): Promise<BoardUser[]> => {
        const response = await this._api.http.get<Resource<BoardUser[]>>(
            this._endpoint + '/users',
        );
        return response.data.data;
    };
}
