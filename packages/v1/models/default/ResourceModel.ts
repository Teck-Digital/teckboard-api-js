import { isEmpty } from 'lodash';
import JsonResponse from '../../endpoint/JsonResponse';
import Model from './Model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ModelOptions {
    endpoints: Endpoints | string;
}
export interface Endpoints {
    get: string;
    patch: string;
    delete: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ModelPairs<T> = [keyof T, any];
export default abstract class ResourceModel<I> extends Model<I> {
    protected readonly _endpoints: Endpoints;

    constructor(resource: I, options: ModelOptions) {
        super(resource);
        const { endpoints } = options;
        this._endpoints = this._initEndpoint(endpoints);
    }

    private _initEndpoint(endpoints: ModelOptions['endpoints']): Endpoints {
        if (typeof endpoints == 'string') {
            return {
                get: endpoints,
                patch: endpoints,
                delete: endpoints,
            };
        } else {
            return endpoints;
        }
    }

    public async save(): Promise<boolean> {
        const diffBoard = this.getDifferentObject();
        if (isEmpty(diffBoard)) {
            return false;
        }
        const response = await this._api.http.patch<JsonResponse<I>>(
            this._endpoints.patch,
            diffBoard,
        );
        return response.status == 200;
    }
}
