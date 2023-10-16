module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
}
