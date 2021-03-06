const bunyan = require('bunyan');
const packageJson = require('../package.json');

const logger = bunyan.createLogger({
  name: 'botcher-bot',
  version: packageJson.version,
  streams: [{ stream: process.stdout, level: bunyan.TRACE }]
});
logger.info({ NODE_ENV: process.env.NODE_ENV }, 'API logger loaded');

module.exports = logger;
