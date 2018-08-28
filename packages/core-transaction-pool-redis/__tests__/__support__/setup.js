'use strict';

const path = require('path')
const container = require('@slackenvironment/core-container')

jest.setTimeout(30000)

exports.setUp = async () => {
  await container.setUp({
    data: '~/.slack',
    config: path.resolve(__dirname, '../../../core/lib/config/testnet'),
    token: 'slack',
    network: 'testnet'
  }, {
    exit: '@slackenvironment/core-blockchain',
    exclude: [
      '@slackenvironment/core-transaction-pool-redis'
    ]
  })
}

exports.tearDown = async () => {
  await container.tearDown()
}
