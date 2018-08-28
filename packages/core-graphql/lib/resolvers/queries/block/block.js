'use strict';

const database = require('@slackenvironment/core-container').resolvePlugin('database')

/**
 * Get a single block from the database
 * @return {Block}
 */
module.exports = (_, { id }) => database.blocks.findById(id)
