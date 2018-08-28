module.exports = {
  '@slackenvironment/core-event-emitter': {},
  '@slackenvironment/core-config': {},
  '@slackenvironment/core-logger': {},
  '@slackenvironment/core-logger-winston': {
    transports: {
      console: {
        options: {
          colorize: true,
          level: process.env.SLACK_LOG_LEVEL || 'debug'
        }
      },
      dailyRotate: {
        options: {
          filename: process.env.SLACK_LOG_FILE || `${process.env.SLACK_PATH_DATA}/logs/core/${process.env.SLACK_NETWORK_NAME}.1/%DATE%.log`,
          datePattern: 'YYYY-MM-DD',
          level: process.env.SLACK_LOG_LEVEL || 'debug',
          zippedArchive: true
        }
      }
    }
  },
  '@slackenvironment/core-database': {
    snapshots: `${process.env.SLACK_PATH_DATA}/${process.env.SLACK_NETWORK_NAME}.1/snapshots`
  },
  '@slackenvironment/core-database-sequelize': {
    dialect: 'sqlite',
    storage: process.env.SLACK_DB_STORAGE || `${process.env.SLACK_PATH_DATA}/database/${process.env.SLACK_NETWORK_NAME}.1.sqlite`,
    // host: process.env.SLACK_DB_HOST || 'localhost',
    // dialect: process.env.SLACK_DB_DIALECT || 'postgres',
    // username: process.env.SLACK_DB_USERNAME || 'slack',
    // password: process.env.SLACK_DB_PASSWORD || 'password',
    // database: process.env.SLACK_DB_DATABASE || 'slack_testnet1',
    logging: process.env.SLACK_DB_LOGGING,
    redis: {
      host: process.env.SLACK_REDIS_HOST || 'localhost',
      port: process.env.SLACK_REDIS_PORT || 6379
    }
  },
  '@slackenvironment/core-transaction-pool': {},
  '@slackenvironment/core-transaction-pool-redis': {
    enabled: !process.env.SLACK_TRANSACTION_POOL_DISABLED,
    key: 'slack1',
    maxTransactionsPerSender: process.env.SLACK_TRANSACTION_POOL_MAX_PER_SENDER || 100,
    whitelist: [],
    redis: {
      host: process.env.SLACK_REDIS_HOST || 'localhost',
      port: process.env.SLACK_REDIS_PORT || 6379
    }
  },
  '@slackenvironment/core-p2p': {
    host: process.env.SLACK_P2P_HOST || '0.0.0.0',
    port: process.env.SLACK_P2P_PORT || 4102,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1', '192.168.*']
  },
  '@slackenvironment/core-blockchain': {
    fastRebuild: false
  },
  '@slackenvironment/core-api': {
    enabled: !process.env.SLACK_API_DISABLED,
    host: process.env.SLACK_API_HOST || '0.0.0.0',
    port: process.env.SLACK_API_PORT || 4103,
    whitelist: ['*']
  },
  '@slackenvironment/core-webhooks': {
    enabled: process.env.SLACK_WEBHOOKS_ENABLED,
    database: {
      dialect: 'sqlite',
      storage: `${process.env.SLACK_PATH_DATA}/database/${process.env.SLACK_NETWORK_NAME}.1/webhooks.sqlite`,
      logging: process.env.SLACK_DB_LOGGING
    },
    server: {
      enabled: process.env.SLACK_WEBHOOKS_API_ENABLED,
      host: process.env.SLACK_WEBHOOKS_HOST || '0.0.0.0',
      port: process.env.SLACK_WEBHOOKS_PORT || 4004,
      whitelist: ['127.0.0.1', '::ffff:127.0.0.1', '192.168.*']
    }
  },
  '@slackenvironment/core-graphql': {
    enabled: process.env.SLACK_GRAPHQL_ENABLED,
    host: process.env.SLACK_GRAPHQL_HOST || '0.0.0.0',
    port: process.env.SLACK_GRAPHQL_PORT || 4105,
    path: '/graphql',
    graphiql: true
  },
  '@slackenvironment/core-forger': {
    hosts: ['http://127.0.0.1:4102']
  },
  '@slackenvironment/core-json-rpc': {
    enabled: process.env.SLACK_JSON_RPC_ENABLED,
    host: process.env.SLACK_JSON_RPC_HOST || '0.0.0.0',
    port: process.env.SLACK_JSON_RPC_PORT || 8080,
    allowRemote: true,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1', '192.168.*']
  }
}
