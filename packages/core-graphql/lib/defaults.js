'use strict';

/**
 * Default configuration for the @slackenvironment/core-graphql plugin
 */
module.exports = {
  enabled: false,
  host: process.env.SLACK_GRAPHQL_HOST || '0.0.0.0',
  port: process.env.SLACK_GRAPHQL_PORT || 4005,
  path: '/graphql',
  graphiql: true
}
