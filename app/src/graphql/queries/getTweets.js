import {gql} from 'react-apollo'

export default gql`
  {
    getTweets {
      _id
      text
      isFavorited
      createdAt
      favoriteCount
      user {
        username
        avatar
        lastName
        firstName,
        email
      }
    }
  }
`
