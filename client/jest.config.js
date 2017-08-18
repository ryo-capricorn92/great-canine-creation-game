module.exports = {
  collectCoverageFrom: [
    '**/*.js?(x)',
    '!**/(jest|registerServiceWorker|App|index)*.js',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/tests/**',
  ],
  coverageReporters: [
    'lcov',
  ],
  testMatch: [
    '**/tests/**/*test.js?(x)',
  ],
};
