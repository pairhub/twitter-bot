const Twit = require('twit')
const unique = require('unique-random-array')
const config = require('../config')

const param = config.twitterConfig
const queryString = unique(param.queryString.split(','))

const bot = new Twit(config.twitterKeys)

const retweet = () => {
  let query = queryString()
  bot.get('search/tweets', {
    q: query,
    result_type: param.resultType,
    lang: param.language,
    filter: 'safe'
  }, (err, data) => {
    // grab tweet ID to retweet
    let retweetId = data.statuses[0].id_str

    if (err) console.log('ERRORDERP: Cannot Search Tweet!')

    bot.post('statuses/retweet/:id', {
      id: retweetId
    }, (err, response) => {
      if (err) {
        console.log('ERRORDERP: Retweet!')
      }
      console.log(data.statuses[0].text, 'SUCCESS: RT')
    })
  })
}

module.exports = retweet
