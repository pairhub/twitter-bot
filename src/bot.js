const Twit = require('twit')
const config = require('./config')

const bot = new Twit(config.twitterKeys)

const retweet = require('./api/retweet')

retweet()
setInterval(retweet, config.twitterConfig.retweet)
