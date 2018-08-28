const get = require('lodash/get')
const networks = require('../networks')

module.exports = class NetworkManager {
  /**
   * Get all network types.
   * @return {Object}
   */
  static getAll () {
    return networks
  }

  /**
   * Find network by token and name.
   * @param  {String} name
   * @param  {String} [token=slack]
   * @return {Object}
   */
  static findByName (name, token = 'slack') {
    return get(networks, `${token.toLowerCase()}.${name}`)
  }
}
