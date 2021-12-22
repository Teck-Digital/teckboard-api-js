export default interface EndpointResource<T> {
    get(id: string): Promise<T>;
}
