
Sequelize Database Provider

## Installation
Slack's Sequelize Database Provider

```bash
yarn add @slackenvironment/core-database-sequelize
```

## Configuration

### Defaults

```js
module.exports = {
  dialect: 'sqlite',
  storage: `${process.env.SLACK_PATH_DATA}/database/${process.env.SLACK_NETWORK_NAME}.sqlite`,
  logging: process.env.SLACK_DB_LOGGING
}
```

