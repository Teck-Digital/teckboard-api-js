import v1 from '../index';
import IContent from '../resources/contents/interfaces/Content';
import Item from '../resources/contents/interfaces/Item';
import BoardModel from './Board';

/**
 * Implementation example for V2
 */
export default class Content implements IContent {
    id!: string;
    board_id!: string;
    margin_top!: number;
    margin_left!: number;
    width!: number;
    height!: number;
    zindex!: number;
    maxzindex!: true;
    expire_date!: null;
    items!: Item[];
    updated_at!: string;
    created_at!: string;

    private readonly _endpoint: string;

    constructor(content: IContent, private readonly _api: v1) {
        Object.assign(this, content);
        this._endpoint =
            this._api.boards.baseUri + '/' + this.board_id + '/' + this.id;
    }

    public static collection = (contents: IContent[], _api: v1): Content[] => {
        return contents.map((b) => new Content(b, _api));
    };

    getBoard = async (): Promise<BoardModel> => {
        return this._api.boards.get(this.board_id);
    };
}
