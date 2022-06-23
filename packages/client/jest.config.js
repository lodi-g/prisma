const forceTranspile = require('../../helpers/jest/forceTranspile')

module.exports = {
  transform: {
    '^.+\\.(m?j|t)s$': '@swc/jest',
  },
  transformIgnorePatterns: [forceTranspile(), '@prisma', '\\.prisma'],
  testEnvironment: 'node',
  collectCoverage: process.env.CI ? true : false,
  coverageReporters: ['clover'],
  coverageDirectory: 'src/__tests__/coverage',
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/fixtures/',
    '<rootDir>/generator-build/',
    '<rootDir>/runtime/',
    '<rootDir>/runtime-dist/',
    '<rootDir>/sandbox/',
    '<rootDir>/scripts/',
    '<rootDir>/src/__tests__/benchmarks/',
    '<rootDir>/src/__tests__/types/.*/test.ts',
    '<rootDir>/src/__tests__/integration/happy/exhaustive-schema/generated-dmmf.ts',
    '<rootDir>/src/__tests__/integration/happy/exhaustive-schema-mongo/generated-dmmf.ts',
    '__helpers__/',
    'node_modules/',
    'index.ts',
    'index.d.ts',
    'index.js',
    'index.test-d.ts',
    '.bench.ts',
  ],
  collectCoverageFrom: ['src/**/*.ts', '!**/__tests__/**/*'],
  snapshotSerializers: ['@prisma/internals/src/utils/jestSnapshotSerializer'],
  testTimeout: 90000,
  setupFiles: ['./helpers/jestSetup.js'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        addFileAttribute: 'true',
        ancestorSeparator: ' › ',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      },
    ],
  ],
}
