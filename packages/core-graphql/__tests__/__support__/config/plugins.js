module.exports = {
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
          filename: process.env.SLACK_LOG_FILE || `${process.env.SLACK_PATH_DATA}/logs/core/${process.env.SLACK_NETWORK_NAME}/%DATE%.log`,
          datePattern: 'YYYY-MM-DD',
          level: process.env.SLACK_LOG_LEVEL || 'debug',
          zippedArchive: true
        }
      }
    }
  },
'@slackenvironment/core-graphql': {
    enabled: true,
    host: 'localhost',
    port: 4005,
    path: '/graphql',
    graphiql: true
  }
}
