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
export default abstract class Model<C, I> {
    protected readonly original: I;

    constructor(resource: I, protected readonly _api: v1) {
        Object.assign(this, resource);
        this.original = resource;
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
