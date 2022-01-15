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
type EventName = 'save' | 'change' | 'update';

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
        const diff = this.getDifferentObject();
        if (isEmpty(diff)) {
            return false;
        }
        const response = await this.api.http.patch<JsonResponse<I>>(
            this._endpoints.patch,
            diff,
        );
        this.emitter.emit('save', this);
        this.emitter.emit('update', this);
        return response.status == 200;
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
