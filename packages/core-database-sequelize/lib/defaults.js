'use strict'

module.exports = {
  dialect: 'sqlite',
  storage: process.env.SLACK_DB_STORAGE || `${process.env.SLACK_PATH_DATA}/database/${process.env.SLACK_NETWORK_NAME}.sqlite`,
  logging: process.env.SLACK_DB_LOGGING,
  redis: {
    host: process.env.SLACK_REDIS_HOST || 'localhost',
    port: process.env.SLACK_REDIS_PORT || 6379
  }
}
