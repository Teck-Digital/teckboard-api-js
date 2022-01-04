export default interface PaginationResponse<T> {
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
}
