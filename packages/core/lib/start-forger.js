'use strict'

const container = require('@slackenvironment/core-container')

/**
 * Start a forger.
 * @param  {Object} options
 * @return {void}
 */
module.exports = async (options) => {
  await container.setUp(options, {
    include: [
      '@slackenvironment/core-event-emitter',
      '@slackenvironment/core-config',
      '@slackenvironment/core-logger',
      '@slackenvironment/core-logger-winston',
      '@slackenvironment/core-forger'
    ],
    options: {
      '@slackenvironment/core-blockchain': {
        networkStart: options.networkStart
      },
      '@slackenvironment/core-forger': {
        bip38: options.bip38,
        address: options.address,
        password: options.password
      }
    }
  })
}
