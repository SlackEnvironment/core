

## Installation

```bash
yarn add @slackenvironment/core-transaction-pool-redis
```

## Configuration

### Defaults

```js
module.exports = {
  enabled: true,
  key: 'slack',
  maxTransactionsPerSender: 100,
  allowedSenders: [],
  redis: {
    host: process.env.SLACK_REDIS_HOST || 'localhost',
    port: process.env.SLACK_REDIS_PORT || 6379
  }
}
```
