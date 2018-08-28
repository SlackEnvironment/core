'use strict'

const path = require('path')
const container = require('@slackenvironment/core-container')

jest.setTimeout(60000)

beforeAll(async () => {
  await container.setUp({
    data: '~/.slack',
    config: path.resolve(__dirname, '../../../core/lib/config/mainnet'),
    token: 'slack',
    network: 'mainnet'
  }, {
    exclude: [
      '@slackenvironment/core-api',
      '@slackenvironment/core-webhooks',
      '@slackenvironment/core-graphql',
      '@slackenvironment/core-forger'
    ],
    options: {
      '@slackenvironment/core-json-rpc': {
        enabled: true
      }
    }
  })
})

afterAll(async () => {
  await container.tearDown()
})
