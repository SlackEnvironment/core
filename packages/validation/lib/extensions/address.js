module.exports = (joi) => ({
  name: 'slackAddress',
  base: joi.string().alphanum().length(34)
})
