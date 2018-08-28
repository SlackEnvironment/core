'use strict'

const container = require('@slackenvironment/core-container')

/**
 * Start a node.
 * @param  {Object} options
 * @return {void}
 */
module.exports = async (options) => {
  await container.setUp(options, {
    options: {
      '@slackenvironment/core-p2p': {
        networkStart: options.networkStart
      },
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
