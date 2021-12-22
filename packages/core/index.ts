import ApiInterface from './ApiInterface';

type Version = 'v1';

export default class Api<T extends ApiInterface> {
    public api: T;

    constructor(version: Version, config: { endpoint?: string }) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const api = require('./' + version).default;
        this.api = new api(config);
    }
}
