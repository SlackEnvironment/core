expect.extend({
  toBeSlackAddress: require('../../../lib/matchers/fields/address')
})

describe('.toBeSlackAddress', () => {
  test('passes when given a valid address', () => {
    expect('DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN').toBeSlackAddress()
  })

  test('fails when not given a valid address', () => {
    expect('invalid-address').not.toBeSlackAddress()
  })
})
