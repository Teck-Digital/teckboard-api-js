import v1 from '..';

declare global {
    function someFunction(): string;
    // eslint-disable-next-line no-var
    var __api__: v1;
}
