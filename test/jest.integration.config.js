module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '../test/integration',
  testMatch: ['**/*.spec.ts'],
  coverageDirectory: 'coverage/integration',
  collectCoverageFrom: ['**/*.ts'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './test-results/integration',
        outputName: 'junit.xml',
      },
    ],
  ],
};
