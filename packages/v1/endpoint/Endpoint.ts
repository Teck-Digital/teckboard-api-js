import Resource from './JsonResponse';

export default interface Endpoint<T> {
    get(): Resource<T>;
}
