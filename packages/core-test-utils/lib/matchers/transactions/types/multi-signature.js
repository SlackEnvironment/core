'use strict'

const { MULTI_SIGNATURE } = require('@slackenvironment/crypto').constants

module.exports = (received) => {
  return {
    message: () => 'Expected value to be a valid MULTI_SIGNATURE transaction.',
    pass: received.type === MULTI_SIGNATURE
  }
}
