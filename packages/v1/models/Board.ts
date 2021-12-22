import Icon from '../interfaces/Icon';

import { Board as IBoard, Channel } from '../resources/boards';
import { BoardChatSettings } from '../resources/boards/interfaces/Board';
import Content from '../resources/contents/interfaces/Content';
import v1 from '../index';
import Resource from '../endpoint/JsonResponse';
import ShardRole from '../resources/boards/interfaces/ShardRole';

/**
 * Implementation example for V2
 */
export default class Board implements IBoard {
    id: string;
    name: string;
    color_scheme: string;
    channel: Channel;
    owner: boolean;
    owner_id: string;
    company_id: string;
    icon?: Icon | undefined;
    latest_content: string;
    roles: ShardRole[];
    settings: BoardChatSettings;
    slug: string;
    uri: string;
    url: string;
    user_role: ShardRole;
    created_at: string;
    updated_at: string;
    private readonly _api: v1;
    private readonly _endpoint: string;

    constructor(board: Board, api: v1) {
        this.id = board.id;
        this.name = board.name;
        this.color_scheme = board.color_scheme;
        this.channel = board.channel;
        this.owner = board.owner;
        this.owner_id = board.owner_id;
        this.company_id = board.company_id;
        this.icon = board.icon;
        this.latest_content = board.latest_content;
        this.roles = board.roles;
        this.settings = board.settings;
        this.slug = board.slug;
        this.uri = board.uri;
        this.url = board.url;
        this.user_role = board.user_role;
        this.created_at = board.created_at;
        this.updated_at = board.updated_at;

        this._api = api;
        this._endpoint = api.boards.baseUri + '/' + this.id;
    }

    getContents = async (): Promise<Content[]> => {
        const response = await this._api.http.get<Resource<Content[]>>(
            this._endpoint + '/contents',
        );
        return response.data.data;
    };
}
