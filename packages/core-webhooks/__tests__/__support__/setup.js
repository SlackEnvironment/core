'use strict'

const path = require('path')
const container = require('@slackenvironment/core-container')

jest.setTimeout(60000)

exports.setUp = async () => {
  process.env.SLACK_WEBHOOKS_ENABLED = true

  await container.setUp({
    data: '~/.slack',
    config: path.resolve(__dirname, '../../../core/lib/config/testnet'),
    token: 'slack',
    network: 'testnet'
  }, {
    exclude: [
      '@slackenvironment/core-blockchain',
      '@slackenvironment/core-api',
      '@slackenvironment/core-graphql',
      '@slackenvironment/core-forger'
    ]
  })

  await require('../../lib/manager').setUp({
    redis: {
      host: process.env.SLACK_REDIS_HOST || 'localhost',
      port: process.env.SLACK_REDIS_PORT || 6379
    }
  })

  await require('../../lib/server')({
    enabled: false,
    host: process.env.SLACK_WEBHOOKS_HOST || '0.0.0.0',
    port: process.env.SLACK_WEBHOOKS_PORT || 4004,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1', '192.168.*'],
    pagination: {
      limit: 100,
      include: [
        '/api/webhooks'
      ]
    }
  })
}

exports.tearDown = async () => {
  await container.tearDown()
}
