const slack = require('../../../lib/client')
const crypto = require('../../../lib/crypto/crypto')
const { TRANSACTION_TYPES } = require('../../../lib/constants')
const feeManager = require('../../../lib/managers/fee')
const transactionBuilderTests = require('./__shared__/transaction')

let builder

beforeEach(() => {
  builder = slack.getBuilder().vote()

  global.builder = builder
})

describe('Vote Transaction', () => {
  transactionBuilderTests()

  it('should have its specific properties', () => {
    expect(builder).toHaveProperty('data.type', TRANSACTION_TYPES.VOTE)
    expect(builder).toHaveProperty('data.fee', feeManager.get(TRANSACTION_TYPES.VOTE))
    expect(builder).toHaveProperty('data.amount', 0)
    expect(builder).toHaveProperty('data.recipientId', null)
    expect(builder).toHaveProperty('data.senderPublicKey', null)
    expect(builder).toHaveProperty('data.asset')
    expect(builder).toHaveProperty('data.asset.votes', [])
  })

  describe('votesAsset', () => {
    it('establishes the votes asset', () => {
      const votes = ['+dummy-1']
      builder.votesAsset(votes)
      expect(builder.data.asset.votes).toBe(votes)
    })
  })

  describe('sign', () => {
    it('establishes the recipient id', () => {
      const pass = 'dummy pass'

      crypto.getKeys = jest.fn(pass => ({ publicKey: `${pass} public key` }))
      crypto.sign = jest.fn()

      builder.sign(pass)
      expect(builder.data.recipientId).toBe('DKNJwdxrPQg6xXbrpaQLfgi6kC2ndaz8N5')
    })
  })
})
