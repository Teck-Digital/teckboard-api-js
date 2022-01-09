/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: [
        '/node_modules/',
        '__tests__/setup.ts',
        '__tests__/global.d.ts',
    ],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
            isolatedModules: true,
        },
    },
};
