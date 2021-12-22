import PaginationResponse from './PaginationResponse';
import EndpointResource from '../EndpointResource';

export default interface PaginationResource<T>
    extends Omit<EndpointResource<T>, 'getAll'> {
    getPage(page: number): Promise<PaginationResponse<T>>;
    getAll(): Promise<PaginationResponse<T>>;
    get baseUri(): string;
}
