module.exports = {
  '@slackenvironment/core-event-emitter': {},
  '@slackenvironment/core-config': {},
  '@slackenvironment/core-logger': {},
  '@slackenvironment/core-logger-winston': {},
  '@slackenvironment/core-database': {},
  '@slackenvironment/core-database-sequelize': {
    dialect: 'sqlite',
    storage: ':memory:'
  },
  '@slackenvironment/core-transaction-pool': {},
  '@slackenvironment/core-transaction-pool-redis': {},
  '@slackenvironment/core-p2p': {},
  '@slackenvironment/core-blockchain': {},
  '@slackenvironment/core-api': { },
  '@slackenvironment/core-webhooks': {},
  '@slackenvironment/core-graphql': {},
  '@slackenvironment/core-forger': {}
}
