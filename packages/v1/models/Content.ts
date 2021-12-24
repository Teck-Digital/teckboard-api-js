import v1 from '../index';
import IContent from '../resources/contents/interfaces/Content';
import Item from '../resources/contents/interfaces/Item';
import BoardModel from './Board';
import ResourceModel from './default/ResourceModel';

/**
 * Implementation example for V2
 */
export default class Content
    extends ResourceModel<Content, IContent>
    implements IContent
{
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

    constructor(content: IContent, _api: v1) {
        super(content, _api, {
            endpoints:
                _api.boards.baseUri + '/' + content.board_id + '/' + content.id,
        });
    }

    public static collection = (contents: IContent[], _api: v1): Content[] => {
        return contents.map((c) => new Content(c, _api));
    };

    getBoard = async (): Promise<BoardModel> => {
        return this._api.boards.get(this.board_id);
    };
}
