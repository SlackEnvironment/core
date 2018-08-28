module.exports = (joi) => ({
  name: 'slackUsername',
  base: joi.string().regex(/^[a-z0-9!@$&_.]+$/).min(1).max(20)
})
