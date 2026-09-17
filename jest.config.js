module.exports = {
    testEnvironment: "node",
    setupFiles: ["<rootDir>/tests/jest.setup.js"],
    setupFilesAfterEnv: ["./tests/setup.js"],
    testTimeout: 150000,
}