/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-types
type ObjectKeys<T> = T extends object
    ? (keyof T)[]
    : T extends number
    ? []
    : T extends Array<any> | string
    ? string[]
    : never;
interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
    entries<T>(o: T): [keyof T, any];
}
