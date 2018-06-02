import GraphQLDate from 'graphql-date'

import TweetResolvers from './tweet-resolver'
import UserResolvers from './user-resolver'
import User from '../../models/User'

export default {
  Date: GraphQLDate,
  Tweet: {
    user: ({user}) => User.findById(user)
  },
  Query: {
    getTweets: TweetResolvers.getTweets,
    getTweet: TweetResolvers.getTweet,
    getUserTweets: TweetResolvers.getUserTweets,
    me: UserResolvers.me
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  }
}
