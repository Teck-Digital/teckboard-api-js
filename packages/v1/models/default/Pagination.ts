import { merge } from 'lodash';
import v1 from '../..';
import PaginationResponse from '../../endpoint/pagination/PaginationResponse';
import Collection from '../../interfaces/Collections';

export default class Pagination<C, T> {
    private data: T[];

    private pagedData = new Map<number, C[]>();

    private currentChunk: number;

    private nextChunkUrl: string;

    private response: PaginationResponse<T>;

    private ressource: Collection<C, T>;

    private _api = v1.getInstance();

    constructor(response: PaginationResponse<T>, ressource: Collection<C, T>) {
        this.data = response.data;
        this.currentChunk = response.chunk;
        this.nextChunkUrl = response.urls.next;
        this.response = response;
        this.ressource = ressource;
        const data = this.ressource.collection(response.data);
        this.pagedData.set(this.currentChunk, data);
    }

    getCurrentChunk = (): C[] => {
        return this.pagedData.get(this.currentChunk) as C[];
    };

    forChunk = (key: number = this.currentChunk): C[] | undefined => {
        return this.pagedData.get(key);
    };

    get chunk(): number {
        return this.currentChunk;
    }
    get lastChunk(): number {
        return this.response.last_chunk;
    }

    loadNextChunk = async (): Promise<Pagination<C, T>> => {
        if (this.currentChunk != this.lastChunk) {
            const response = await this._api.http.get<PaginationResponse<T>>(
                this.nextChunkUrl,
            );
            const data = this.ressource.collection(response.data.data);
            this.pagedData.set(response.data.chunk, data);
            this.data = merge(this.data, data);
            this.currentChunk = response.data.chunk;
            this.nextChunkUrl = response.data.urls.next;
            this.response = response.data;
        }
        return this;
    };
}
