module.exports = {
  collectCoverageFrom: [
    '**/*.js?(x)',
    '!**/(jest|registerServiceWorker|App|index)*.js',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/src/utils/auth.js',
    '!**/src/container/Restricted.jsx',
  ],
  coverageReporters: [
    'lcov',
  ],
  testMatch: [
    '**/tests/**/*test.js?(x)',
  ],
};
