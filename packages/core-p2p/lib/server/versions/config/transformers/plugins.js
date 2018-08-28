'use strict'

/**
 * Turns a "config" object into readable object.
 * @param  {Object} model
 * @return {Object}
 */
module.exports = (config) => {
  const allowed = [
    '@slackenvironment/core-api',
    '@slackenvironment/core-graphql',
    '@slackenvironment/core-json-rpc',
    '@slackenvironment/core-webhooks'
  ]

  let result = {}

  for (const [name, options] of Object.entries(config.plugins)) {
    if (allowed.includes(name)) {
      if (options.server) {
        result[name] = {
          enabled: !!options.server.enabled,
          port: +options.server.port
        }

        continue
      }

      result[name] = {
        enabled: !!options.enabled,
        port: +options.port
      }
    }
  }

  return result
}
