module.exports = {
  testEnvironment: 'jest-environment-jsdom', // update this line
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
}
