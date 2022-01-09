import { differenceWith, fromPairs, isEqual, pick } from 'lodash';
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
    protected readonly original: I;
    protected readonly _api: v1 = v1.getInstance();
    private readonly attributeKeys: ObjectKeys<I>;

    constructor(resource: I) {
        Object.assign(this, resource);
        this.original = resource;
        this.attributeKeys = Object.keys(resource);
    }

    public getAttributes(): I {
        return pick(this, this.attributeKeys) as I;
    }
    public getDifference(): ModelPairs<I> {
        const oldEntries = Object.entries(this.original);
        const newBoard = pick(this, Object.keys(this.original));
        const newEntries = Object.entries(newBoard);
        return differenceWith(newEntries, oldEntries, isEqual) as ModelPairs<I>;
    }

    public getDifferentObject(): Partial<I> {
        return fromPairs(this.getDifference()) as Partial<I>;
    }
}
