
#  Core - Winston Logger

## Installation

```bash
yarn add @slackenvironment/core-logger-winston
```

## Configuration

### Defaults

```js
module.exports = {
  transports: {
    console: {
      constructor: 'Console',
      options: {
        colorize: true,
        level: process.env.SLACK_LOG_LEVEL || 'debug',
        timestamp: () => Date.now(),
        formatter: (info) => require('./formatter')(info)
      }
    },
    dailyRotate: {
      package: 'winston-daily-rotate-file',
      constructor: 'DailyRotateFile',
      options: {
        filename: `${process.env.SLACK_PATH_DATA}/logs/core/${process.env.SLACK_NETWORK_NAME}/%DATE%.log`,
        datePattern: 'YYYY-MM-DD',
        level: process.env.SLACK_LOG_LEVEL || 'debug',
        zippedArchive: true
      }
    }
  }
}
```
