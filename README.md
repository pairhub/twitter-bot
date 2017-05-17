# PairHub Twitter bot

## TODO:

- [ ] Follow the community hashtag and retweet tweets to it
- [ ] Welcome new community members summarising their skills and who they'd like to pair with
- [x] Retweet specific keywords "pair programming", "anyone want to pair with me"
- [ ] Reply to those specific keywords promoting PairHub


## Pre-requisites

This bot uses the `twit` npm package to manipulate tweets and streams and communicate with Twitter API. Please refer [documentation](https://github.com/ttezel/twit) to make substantial changes.

## Contributing

You can help out by:

- Solving existing [issues](https://github.com/pairhub/twitter-bot/labels/bug).
- Enhancing the bot adding more functionalities [(see issues)].(https://github.com/pairhub/twitter-bot/labels/enhancement)
- Pointing out bugs/errors.

For above option(s), please create an issue so it can be addressed. New to GitHub issues? They have a pretty handy guide you can use to familiarize yourself with them.

## If you can make a change

What you will need:

- Your _own_ Twitter [account](https://twitter.com/signup) for testing
- API Keys for Twitter.
  - Get your Twitter API keys [here](https://apps.twitter.com/app/new).
- [Fork](https://github.com/pairhub/twitter-bot) the repository.
- Add API keys to `.env` file, your `.env` file should look something like this:

```shell
CONSUMER_KEY=xxxxxxxxxxxxxxxxxxxxdMhxg
CONSUMER_SECRET=xxxxxxxxxxxxxxxxxxxxkFNNj1H107PFv1mvWwEM6CZH0fjymV
ACCESS_TOKEN=xxxxxxxxx-xxxxxxxxxxxxxxxxxxxxecKpi90bFhdsGG2N7iII
ACCESS_TOKEN_SECRET=xxxxxxxxxxxxxxxxxxxxZAU8wNKAPU8Qz2c0PhOo43cGO
QUERY_STRING=#someTestHashTag
RESULT_TYPE=mixed
LANG=en
TWITTER_USERNAME=YourTestAccountUserName
TWITTER_RETWEET_RATE=120
```

- Make your suggested change.
- Make sure the code style looks similar to the existing code.
- Create a pull request.

---