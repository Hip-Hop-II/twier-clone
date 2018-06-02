import mongoose, {Schema} from 'mongoose'
import {hashSync, compareSync} from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'
import constants from '../config/constants'

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  firstName: String,
  lastName: String,
  avatar: String,
  password: String,
  email: String
}, {
  timestamps: true
})

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password)
    return next()
  }
  return next()
})
UserSchema.methods = {
  // 密码加密
  _hashPassword (password) {
    return hashSync(password)
  },
  // 验证密码
  authenticateUser(password) {
    return compareSync(password, this.password)
  },
  // 创建token
  createToken () {
    return jwt.sign({
      _id: this._id
    },
    constants.JWT_SECRET)
  }
}

export default mongoose.model('user', UserSchema)
