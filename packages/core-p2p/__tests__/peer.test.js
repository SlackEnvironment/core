'use strict'

const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const axiosMock = new MockAdapter(axios)
const app = require('./__support__/setup')

let genesisBlock
let genesisTransaction

let Peer
let peerMock

beforeAll(async () => {
  await app.setUp()

  // Create the genesis block after the setup has finished or else it uses a potentially
  // wrong network config.
  genesisBlock = require('./__fixtures__/genesisBlock')
  genesisTransaction = require('./__fixtures__/genesisTransaction')

  Peer = require('../lib/peer')
})

afterAll(async () => {
  await app.tearDown()
})

beforeEach(() => {
  peerMock = new Peer('0.0.0.99', 4002)
  Object.assign(peerMock, peerMock.headers)

  axiosMock.reset() // important: resets any existing mocking behavior
})

describe('Peer', () => {
  it('should be an object', () => {
    expect(peerMock).toBeObject()
  })

  describe('toBroadcastInfo', () => {
    it('should be a function', () => {
      expect(peerMock.toBroadcastInfo).toBeFunction()
    })

    it('should be ok', async () => {
      const struct = peerMock.toBroadcastInfo()

      expect(struct).toBeObject()
      expect(struct).toHaveProperty('ip')
      expect(struct).toHaveProperty('port')
      expect(struct).toHaveProperty('version')
      expect(struct).toHaveProperty('os')
      expect(struct).toHaveProperty('status')
      expect(struct).toHaveProperty('height')
      expect(struct).toHaveProperty('delay')
    })
  })

  describe.skip('postBlock', () => {
    it('should be a function', () => {
      expect(peerMock.postBlock).toBeFunction()
    })

    it('should be ok', async () => {
      const response = await peerMock.postBlock(genesisBlock.toBroadcastV1())

      expect(response).toBeObject()
      expect(response).toHaveProperty('success')
      expect(response.success).toBeTruthy()
    })
  })

  describe.skip('postTransactions', () => {
    it('should be a function', () => {
      expect(peerMock.postTransactions).toBeFunction()
    })

    it('should be ok', async () => {
      const response = await peerMock.postTransactions([genesisTransaction.toBroadcastV1()])

      expect(response).toBeObject()
      expect(response).toHaveProperty('success')
      expect(response.success).toBeTruthy()
    })
  })

  describe('downloadBlocks', () => {
    // https://github.com/facebook/jest/issues/3601
    const errorCapturer = fn => fn.then(res => () => res).catch(err => () => { throw err })

    it('should be a function', () => {
      expect(peerMock.downloadBlocks).toBeFunction()
    })

    describe('when the request reply with the blocks', () => {
      it('should return the blocks', async () => {
        const blocks = [{}]
        axiosMock.onGet(`${peerMock.url}/peer/blocks`).reply(200, { blocks })

        const result = await peerMock.downloadBlocks(1)

        expect(result).toEqual(blocks)
      })
    })

    describe('when the request reply with the blocks', () => {
      it('should return the blocks', async () => {
        axiosMock.onGet(`${peerMock.url}/peer/blocks`).reply(500, { data: {} })

        expect(await errorCapturer(peerMock.downloadBlocks(1))).toThrowError(/request.*500/i)
      })
    })
  })

  describe('ping', () => {
    it('should be a function', () => {
      expect(peerMock.ping).toBeFunction()
    })

    it('should be ok', async () => {
      axiosMock.onGet(`${peerMock.url}/peer/status`).reply(() => [200, { success: true }, peerMock.headers])

      const response = await peerMock.ping(5000)

      expect(response).toBeObject()
      expect(response).toHaveProperty('success')
      expect(response.success).toBeTruthy()
    })

    it('should not be ok', async () => {
      axiosMock.onGet(`${peerMock.url}/peer/status`).reply(500)
      expect(peerMock.ping(1)).rejects.toThrowError('is unresponsive')
    })
  })

  describe('getPeers', () => {
    it('should be a function', () => {
      expect(peerMock.getPeers).toBeFunction()
    })

    it('should be ok', async () => {
      const peersMock = [ { ip: '1.1.1.1' } ]
      axiosMock.onGet(`${peerMock.url}/peer/status`).reply(() => [200, { success: true }, peerMock.headers])
      axiosMock.onGet(`${peerMock.url}/peer/list`).reply(() => [200, { peers: peersMock }, peerMock.headers])

      const peers = await peerMock.getPeers()

      expect(peers).toEqual(peersMock)
    })
  })

  describe('__get', () => {
    it('should be a function', () => {
      expect(peerMock.__get).toBeFunction()
    })
  })

  describe('__parseHeaders', () => {
    it('should be a function', () => {
      expect(peerMock.__parseHeaders).toBeFunction()
    })

    it('should be ok', async () => {
      const headers = {
        nethash: 'nethash',
        os: 'os',
        version: 'version'
      }

      await peerMock.__parseHeaders({ headers })

      expect(peerMock.nethash).toBe(headers.nethash)
      expect(peerMock.os).toBe(headers.os)
      expect(peerMock.version).toBe(headers.version)
    })
  })
})
