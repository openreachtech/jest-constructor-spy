'use strict'

module.exports = {
  setupFilesAfterEnv: [
    './config/setupAfterEnv.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
}
