export default interface Collection<Class, Interface> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): Class;
    collection: (ressources: Interface[]) => Class[];
}
