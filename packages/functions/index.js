const functions = require('firebase-functions')
const request = require('request')

exports.onTweetCreate = functions.database
  .ref('/tweets/{tweetId}')
  .onCreate(snapshot => {
    const tweet = snapshot.val()

    console.log('new tweet', JSON.stringify(tweet))

    return sendPushNotification()
  })

async function sendPushNotification() {
  const expoToken = 'ExponentPushToken[dhKlfhNfhz19WBbEc3R3fp]'

  const message = {
    to: expoToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { data: 'goes here' },
    _displayInForeground: true,
  }
  const response = await request({
    method: 'POST',
    uri: 'https://exp.host/--/api/v2/push/send',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    json: message,
  })

  console.log(JSON.stringify(response))
}
