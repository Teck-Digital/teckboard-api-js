import Item from './Item';

export default interface Content {
    id: string;
    board_id: string;
    margin_top: number;
    margin_left: number;
    width: number;
    height: number;
    zindex: number;
    maxzindex: true;
    expire_date: null;
    items: Item[];
    updated_at: string;
    created_at: string;
}
