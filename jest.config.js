module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  reporters: ["default", ["jest-junit", { outputDirectory: "test-results", outputName: "junit.xml" }]]
}
