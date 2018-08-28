@ Core - P2P API

## Installation

```bash
yarn add @slackenvironment/core-p2p
```

## Configuration

### Defaults

```js
module.exports = {
  port: process.env.SLACK_P2P_PORT || 4002,
  remoteinterface: true,
  dns: [
    // Google
    '8.8.8.8',
    '8.8.4.4',
    // CloudFlare
    '1.1.1.1',
    '1.0.0.1',
    // OpenDNS
    '208.67.222.222',
    '208.67.220.220'
  ],
  ntp: [
    'pool.ntp.org',
    'time.google.com'
  ]
}
```

