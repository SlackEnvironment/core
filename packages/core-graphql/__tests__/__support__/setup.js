'use strict'

const path = require('path')
const container = require('@slackenvironment/core-container')

exports.setUp = async () => {
  await container.setUp({
    data: '~/.slack',
    config: path.resolve(__dirname, './config'),
    network: 'testnet',
    token: 'slack'
  }, {
  })

  return container
}

exports.tearDown = () => container.tearDown()
