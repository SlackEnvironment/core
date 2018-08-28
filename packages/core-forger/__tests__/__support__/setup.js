'use strict'

const path = require('path')
const container = require('@slackenvironment/core-container')

exports.setUp = async () => {
  await container.setUp({
    data: '~/.slack',
    config: path.resolve(__dirname, '../../../core/lib/config/testnet'),
    token: 'slack',
    network: 'testnet'
  }, {
    exit: '@slackenvironment/core-blockchain'
  })
}

exports.tearDown = async () => {
  await container.tearDown()
}
