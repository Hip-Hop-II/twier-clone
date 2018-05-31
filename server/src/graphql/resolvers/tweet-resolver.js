import Tweet from '../../models/Tweet'
export default {
  getTweets: () => Tweet.find({}),
  getTweet: (_, {_id}) => {
    return Tweet.findById(_id)
  },
  createTweet: (_, args) => Tweet.create(args),
  updateTweet: (_, {_id, ...rest}) => Tweet.findByIdAndUpdate(_id, rest, {new: true}),
  deleteTweet: async (_, {_id}) => {
    try {
      await Tweet.findByIdAndRemove(_id)
      return {
        message: 'Delete Success'
      }
    } catch (error) {
      throw error
    }
  }
}