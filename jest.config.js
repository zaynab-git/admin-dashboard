module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  preset: "@vue/cli-plugin-unit-jest",
  "collectCoverage": true,
  "collectCoverageFrom": ["**/*.{js,vue}", "!**/node_modules/**"]
};
