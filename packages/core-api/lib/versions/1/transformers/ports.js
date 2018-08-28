'use strict'

/**
 * Turns a "config" object into readable object.
 * @param  {Object} model
 * @return {Object}
 */
module.exports = (config) => {
  let result = {}
  const keys = [
    '@slackenvironment/core-p2p',
    '@slackenvironment/core-api',
    '@slackenvironment/core-graphql',
    '@slackenvironment/core-json-rpc',
    '@slackenvironment/core-webhooks'
  ]

  for (let [name, options] of Object.entries(config.plugins)) {
    if (keys.includes(name) && options.enabled) {
      if (options.server && options.server.enabled) {
        result[name] = options.server.port

        continue
      }

      result[name] = options.port
    }
  }

  return result
}
