'use strict'

module.exports = {
  enabled: process.env.SLACK_JSON_RPC_ENABLED,
  host: process.env.SLACK_JSON_RPC_HOST || '0.0.0.0',
  port: process.env.SLACK_JSON_RPC_PORT || 8080,
  allowRemote: true,
  whitelist: ['127.0.0.1', '::ffff:127.0.0.1', '192.168.*']
}
