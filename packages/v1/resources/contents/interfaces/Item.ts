import Op from 'quill-delta/dist/Op';

export type ItemType =
    | 'txt'
    | 'video'
    | 'jpg'
    | 'png'
    | 'jpeg'
    | 'gif'
    | 'tif'
    | 'pdf';
export default interface Item {
    id: string;
    location: string | null;
    original_name: string;
    width: number;
    height: number;
    text_value: Op[] | string;
    type: ItemType;
    updated_at: string;
    created_at: string;
}
