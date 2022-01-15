import { AxiosResponse } from 'axios';
import { isEmpty } from 'lodash';
import JsonResponse from '../../endpoint/JsonResponse';
import Model from './Model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ModelOptions<I> {
    endpoints: Endpoints<I> | string;
    hooks?: {
        save: (model: ResourceModel<I>, diff: Partial<I>) => void;
    };
}
export interface Endpoints<I> {
    get: string;
    patch:
        | string
        | ((diff: Partial<I>) => Promise<AxiosResponse<JsonResponse<I>>>);
    delete: string;
}
type EventName = 'save' | 'change' | 'update';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ModelPairs<T> = [keyof T, any];
export default abstract class ResourceModel<I> extends Model<I> {
    protected readonly _endpoints: Endpoints<I>;
    protected readonly _hooks: ModelOptions<I>['hooks'];

    constructor(resource: I, options: ModelOptions<I>) {
        super(resource);
        const { endpoints } = options;
        this._endpoints = this._initEndpoint(endpoints);
    }

    private _initEndpoint(
        endpoints: ModelOptions<I>['endpoints'],
    ): Endpoints<I> {
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

    public async save(): Promise<AxiosResponse<JsonResponse<I>> | false> {
        const diff = this.getDifferentObject();
        if (isEmpty(diff)) {
            return false;
        }
        let response: AxiosResponse<JsonResponse<I>>;
        if (typeof this._endpoints.patch == 'string') {
            response = await this.api.http.patch<JsonResponse<I>>(
                this._endpoints.patch,
                diff,
            );
        } else {
            response = await this._endpoints.patch(diff);
        }
        this.original = response.data.data;
        this.emitter.emit('save', this);
        this.emitter.emit('update', this);
        return response;
    }

    /**
     * @returns Reference to self to allow chaining
     * @See {@link EventEmitter.addListener}
     */
    public on(
        eventName: EventName,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        listener: (model: this, key?: keyof I, value?: any) => void,
    ): this {
        this.emitter.on(eventName, listener);
        return this;
    }

    /**
     * @returns Reference to self to allow chaining
     * @See {@link EventEmitter.removeListener}
     */
    public removeListener(
        eventName: EventName,
        listener: (model: this) => void,
    ): this {
        this.emitter.removeListener(eventName, listener);
        return this;
    }
}
