'use strict'

const path = require('path')
const container = require('@slackenvironment/core-container')

exports.setUp = async () => {
  jest.setTimeout(60000)

  process.env.SLACK_SKIP_BLOCKCHAIN = true

  await container.setUp({
    data: '~/.slack',
    config: path.resolve(__dirname, '../../../core/lib/config/testnet'),
    token: 'slack',
    network: 'testnet'
  }, {
    exit: '@slackenvironment/core-blockchain',
    exclude: [
      '@slackenvironment/core-p2p',
      '@slackenvironment/core-transaction-pool',
      '@slackenvironment/core-transaction-pool-redis'
    ]
  })
}

exports.tearDown = async () => {
  await container.tearDown()
}
