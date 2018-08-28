'use strict'

const container = require('@slackenvironment/core-container')

/**
 * Create a snapshot.
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
      '@slackenvironment/core-database',
      '@slackenvironment/core-database-sequelize',
      '@slackenvironment/core-blockchain'
    ],
    options: {
      '@slackenvironment/core-blockchain': {
        networkStart: options.networkStart
      }
    }
  })

  container.resolvePlugin('database').snapshot()
}
