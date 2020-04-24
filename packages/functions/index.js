const functions = require('firebase-functions')

exports.onTweetCreate = functions.database
  .ref('/tweets/{tweetId}')
  .onCreate(snapshot => {
    const tweet = snapshot.val()

    console.log('new tweet', JSON.stringify(tweet))
  })
