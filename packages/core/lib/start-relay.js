'use strict'

const container = require('@slackenvironment/core-container')

/**
 * Start a relay.
 * @param  {Object} options
 * @return {void}
 */
module.exports = async (options) => {
  await container.setUp(options, {
    exclude: ['@slackenvironment/core-forger'],
    options: {
      '@slackenvironment/core-blockchain': {
        networkStart: options.networkStart
      }
    }
  })
}
