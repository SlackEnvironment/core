'use strict';

const database = require('@slackenvironment/core-container').resolvePlugin('database')
const { constants } = require('@slackenvironment/crypto')
const { formatOrderBy, unserializeTransactions } = require('../../../helpers')

/**
 * Get multiple transactions from the database
 * @return {Transaction[]}
 */
module.exports = async (root, args) => {
  const { orderBy, filter, ...params } = args

  const order = formatOrderBy(orderBy, 'timestamp:DESC')

  if (params.type) {
    params.type = constants.TRANSACTION_TYPES[params.type]
  }

  const transactions = await database.transactions.findAll({ ...filter, orderBy: order, ...params }, false)

  return unserializeTransactions(transactions)
}
