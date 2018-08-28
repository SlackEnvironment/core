'use strict'

module.exports = {
  enabled: !process.env.SLACK_TRANSACTION_POOL_DISABLED,
  key: 'slack',
  maxTransactionsPerSender: process.env.SLACK_TRANSACTION_POOL_MAX_PER_SENDER || 100,
  allowedSenders: [],
  redis: {
    host: process.env.SLACK_REDIS_HOST || 'localhost',
    port: process.env.SLACK_REDIS_PORT || 6379
  }
}
