import Api from './ApiInterface';
export default abstract class Resource<T extends Api> {
    protected api: T;

    constructor(api: T) {
        this.api = api;
    }
}
