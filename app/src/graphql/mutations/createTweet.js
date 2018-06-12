import {gql} from 'react-apollo'

export default gql`
  mutation createTweet($text: String!) {
    createTweet(text: $text) {
      _id
      text
      favoriteCount
      createdAt
      user {
        username
        email
        firstName
        lastName
        avatar
      }
    }
  }
`
