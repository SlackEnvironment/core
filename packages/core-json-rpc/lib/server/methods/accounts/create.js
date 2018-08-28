const Joi = require('joi')
const slack = require('@slackenvironment/crypto')

module.exports = {
  name: 'accounts.create',
  async method (params) {
    const account = slack.crypto.getKeys(params.passphrase)

    return {
      publicKey: account.publicKey,
      address: slack.crypto.getAddress(account.publicKey)
    }
  },
  schema: {
    passphrase: Joi.string().required()
  }
}
