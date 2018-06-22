import User from '../../models/User'
import FavoriteTweet from '../../models/FavoriteTweet'
import {requireAuth} from '../../services/auth'

export default {
  signup: async (_, {fullName, ...rest}) => {
    const [firstName, ...lastName] = fullName.split(' ')
    const user = await User.create({firstName, lastName, ...rest})
    await FavoriteTweet.create({
      userId: user._id
    })
    return {
      token: user.createToken()
    }
  },
  login: async (_, {email, password}) => {
    const user = await User.findOne({email})
    if (!user) {
      throw new Error('用户名不存在')
    }
    if (!user.authenticateUser(password)) {
      throw new Error('密码错误')
    }
    return {
      token: user.createToken()
    }
  },
  me: async (_, args, {user}) => {
    try {
      const me = await requireAuth(user)
      return me
    } catch (error) {
      throw error
    }
  }
}
