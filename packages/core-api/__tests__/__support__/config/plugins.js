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
  '@slackenvironment/core-api': {
    enabled: true,
    whitelist: [
      '127.0.0.1',
      '::ffff:127.0.0.1'
    ]
  },
  '@slackenvironment/core-webhooks': {},
  '@slackenvironment/core-forger': {}
}
