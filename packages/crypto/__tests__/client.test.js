const slack = require('../lib/client')

describe('Client', () => {
  it('should be instantiated', () => {
    expect(slack).toBeObject()
  })
})
