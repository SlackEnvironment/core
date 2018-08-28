module.exports = (joi) => ({
  name: 'slackPublicKey',
  base: joi.string().hex().length(66)
})
