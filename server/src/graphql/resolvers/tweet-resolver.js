import Tweet from '../../models/Tweet'
import FavoriteTweet from '../../models/FavoriteTweet'
import {requireAuth} from '../../services/auth'
export default {
  getTweets: async (_, args, {user}) => {
    try {
      await requireAuth(user)
      const p1 = Tweet.find({}).sort({createdAt: -1})
      const p2 = FavoriteTweet.findOne({userId: user._id})
      const [tweets, favorites] = await Promise.all([p1, p2])

      // 判断是否点赞
      const tweetsToSend = tweets.reduce((arr, tweet) => {
        const tw = tweet.toJSON()
        if (favorites.tweets.some(t => t.equals(tweet._id))) {
          arr.push({
            ...tw,
            isFavorited: true
          })
        } else {
          arr.push({
            ...tw,
            isFavorited: false
          })
        }
        return arr
      }, [])
      return tweetsToSend
    } catch (error) {
      throw error
    }
  },
  getTweet: async (_, {_id}, {user}) => {
    try {
      await requireAuth(user)
      return Tweet.findById(_id)
    } catch (error) {
      throw error
    }
  },
  // 根据userId 获取 tweets
  getUserTweets: async (_, args, {user}) => {
    try {
      await requireAuth(user)
      return Tweet.find({user: user._id}).sort({createdAt: -1})
    } catch (error) {
      throw error
    }
  },
  createTweet: async (_, args, {user}) => {
    try {
      await requireAuth(user)
      return Tweet.create({...args, user: user._id})
    } catch (error) {
      throw error
    }
  },
  updateTweet: async (_, {_id, ...rest}, {user}) => {
    // {text: "Hello world"， favoriteCount: 0}
    try {
      await requireAuth(user)
      const tweet = await Tweet.findOne({_id, user: user._id})
      if (!tweet) {
        throw new Error('Not found!')
      }
      Object.entries(rest).forEach(([key, value]) => {
        tweet[key] = value
      })
      return tweet.save()
    } catch (error) {
      throw error
    }
  },
  deleteTweet: async (_, {_id}, {user}) => {
    try {
      await requireAuth(user)
      const tweet = Tweet.findOne({_id, user: user._id})
      if (!tweet) {
        throw new Error('Not found!')
      }
      await tweet.remove()
      return {
        message: 'Delete Success'
      }
    } catch (error) {
      throw error
    }
  },
  favoriteTweet: async (_, {_id}, {user}) => {
    try {
      await requireAuth(user)
      const favorites = await FavoriteTweet.findOne({userId: user._id})
      return favorites.userFavoritedTweet(_id)
    } catch (error) {
      throw error
    }
  }
}
