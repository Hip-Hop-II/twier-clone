import User from '../../models/User'

export default {
  signup: async (_, {fullName, ...rest}) => {
    const [firstName, ...lastName] = fullName.split(' ')
    const user = await User.create({firstName, lastName, ...rest})

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
    return user
  }
}
