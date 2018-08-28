'use strict'

const path = require('path')
const container = require('@slackenvironment/core-container')

jest.setTimeout(60000)

exports.setUp = async () => {
  await container.setUp({
    data: '~/.slack',
    config: path.resolve(__dirname, './config')
  }, {
    exit: '@slackenvironment/core-blockchain'
  })
}

exports.tearDown = async () => {
  await container.tearDown()
}
