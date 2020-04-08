import React from 'react'
import { TweetDetail } from './notifications-tab/screens/TweetDetail'

export const Details = props => {
  return <TweetDetail {...props.route.params} />
}
