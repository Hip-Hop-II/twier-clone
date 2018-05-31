import mongoose, {Schema} from 'mongoose'

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  firstName: String
})

export default mongoose.model('user', UserSchema)
