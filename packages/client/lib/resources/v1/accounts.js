const Base = require('../../base')

module.exports = class Wallets extends Base {
  /**
   * Am I robbing this program? Because this gets all the Wallets
   * @param  {Object} query
   * @return {Promise}
   */
  all (query) {
    return this.http.get('accounts/getAllAccounts', query)
  }

  /**
   * Found it at a bar, time to return it. Gotta get the Wallet by the address
   * @param  {String} address
   * @return {Promise}
   */
  get (address) {
    return this.http.get('accounts', {address})
  }

  /**
   * Count how many wallets there are.
   * @return {Promise}
   */
  count () {
    return this.http.get('accounts/count')
  }

  /**
   * Get deletate by address.
   * @param  {String} address
   * @return {Promise}
   */
  delegates (address) {
    return this.http.get('accounts/delegates', {address})
  }

  /**
   * Get delegate fees.
   * @return {Promise}
   */
  fee () {
    return this.http.get('accounts/delegates/fee')
  }

  /**
   * Get wallet balance by Address.
   * @param  {String} address
   * @return {Promise}
   */
  balance (address) {
    return this.http.get('accounts/getBalance', {address})
  }

  /**
   * Get wallet public key by Address.
   * @param  {String} address
   * @return {Promise}
   */
  publicKey (address) {
    return this.http.get('accounts/getPublicKey', {address})
  }

  /**
   * Get the top wallets.
   * @param  {Object} query
   * @return {Promise}
   */
  top (query) {
    return this.http.get('accounts/top', query)
  }
}
