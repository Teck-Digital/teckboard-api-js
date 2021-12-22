import { AxiosResponse } from 'axios';

export default interface PaginationResponse<T> {
    response: AxiosResponse<T>;
    data: {
        chunk: number;
        chunk_size: number;
        last_chunk: number;
        urls: {
            next: string;
            prev: string;
            first: string;
            last: string;
        };
        path: string;
        from: number;
        to: number;
        data: T[];
    };
}
