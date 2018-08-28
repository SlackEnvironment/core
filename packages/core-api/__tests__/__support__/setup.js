'use strict'

const path = require('path')
const container = require('@slackenvironment/core-container')

const generateRound = require('./utils/generate-round')
const activeDelegates = require('../__fixtures__/delegates.json')
const round = generateRound(activeDelegates, 1)

exports.setUp = async () => {
  jest.setTimeout(60000)

  process.env.SLACK_SKIP_BLOCKCHAIN_STARTED_CHECK = true

  await container.setUp({
    data: '~/.slack',
    config: path.resolve(__dirname, './config')
  }, {
    exit: '@slackenvironment/core-api'
  })

  // seed
  const connection = container.resolvePlugin('database')
  await connection.buildWallets(1)
  await connection.saveWallets(true)
  await connection.saveRound(round)
}

exports.tearDown = async () => {
  await container.tearDown()
}
