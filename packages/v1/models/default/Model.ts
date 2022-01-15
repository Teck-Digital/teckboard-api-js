import EventEmitter from 'events';
import { cloneDeep, differenceWith, fromPairs, isEqual, pick } from 'lodash';
import v1 from '../..';

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
export default abstract class Model<I> {
    private __values: I;
    private readonly __attributeKeys: ObjectKeys<I>;

    protected readonly original: I;
    protected readonly api: v1 = v1.getInstance();
    protected readonly emitter: EventEmitter = new EventEmitter();

    constructor(resource: I) {
        this.original = resource;
        this.__values = cloneDeep(resource);
        this.__attributeKeys = Object.keys(resource);
        this.__attributeKeys.forEach((key) => {
            Object.defineProperty(this, key, {
                get() {
                    return (this as Model<I>).__values[key as keyof I];
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                set(value: any) {
                    (this as Model<I>).emitter.emit('change', this, key, value);
                    (this as Model<I>).__values[key as keyof I] = value;
                },
            });
        });
    }
    /**
     * @returns Reference to self to allow chaining
     * @See {@link EventEmitter.addListener}
     */
    public onChange(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        listener: (key: keyof I, value: any, model: this) => void,
    ): this {
        this.emitter.on('change', listener);
        return this;
    }

    public getAttributes(): I {
        return pick(this, this.__attributeKeys) as I;
    }
    public getDifference(): ModelPairs<I> {
        const oldEntries = Object.entries(this.original);
        const newEntries = Object.entries(this.__values);
        return differenceWith(newEntries, oldEntries, isEqual) as ModelPairs<I>;
    }

    public getDifferentObject(): Partial<I> {
        return fromPairs(this.getDifference()) as Partial<I>;
    }
}
