const configMainnet = require('./networks/slack/mainnet.json')
const configDevnet = require('./networks/slack/devnet.json')
const configTestnet = require('./networks/slack/testnet.json')

/**
 * The Slacktoshi base.
 * @type {Number}
 */
exports.SLACKTOSHI = Math.pow(10, 8)

/**
 * Available transaction types.
 * @type {Object}
 */
exports.TRANSACTION_TYPES = Object.freeze({
  TRANSFER: 0,
  SECOND_SIGNATURE: 1,
  DELEGATE_REGISTRATION: 2,
  VOTE: 3,
  MULTI_SIGNATURE: 4,
  IPFS: 5,
  TIMELOCK_TRANSFER: 6,
  MULTI_PAYMENT: 7,
  DELEGATE_RESIGNATION: 8
})

/**
 * Available network configurations.
 * @type {Object}
 */
exports.CONFIGURATIONS = Object.freeze({
  SLACK: {
    MAINNET: configMainnet,
    DEVNET: configDevnet,
    TESTNET: configTestnet
  }
})
