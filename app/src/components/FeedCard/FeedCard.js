import React, { Component  } from "react"
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {colors} from '../../utils/constants'
import FeedCardHeader from './FeedCardHeader'
import FeedCardBottom from './FeedCardBottom'

import {graphql} from 'react-apollo'
import FAVORITE_TWEET_MUTATION from '../../graphql/mutations/favoriteTweet'

class FeedCard extends Component {
  render () {
    const {text, favoriteCount, favorite, isFavorited, ...args} = this.props
    return (
      <View style={styles.wrapper}>
        <FeedCardHeader {...args.user} />
        <View style={styles.wrapperContainer}>
          <Text style={styles.cardContentText}>
          {text}
          </Text>
        </View>
        <FeedCardBottom favoriteCount={favoriteCount} 
          onFavoritePress={favorite}
          isFavorited={isFavorited}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 180,
    backgroundColor: colors.WHITE,
    width: '100%',
    padding: 7,
    shadowColor: colors.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    marginVertical: 5
  },
  wrapperContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingVertical: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 20
  },
  cardContentText: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '500',
    color: colors.SECONDARY
  }
})

export default graphql(FAVORITE_TWEET_MUTATION, {
  props: ({ownProps, mutate}) => ({
    favorite: () => mutate({
      variables: {
        _id: ownProps._id
      },
      optimisticResponse: {
        __typename: 'Mutation',
        favoriteTweet: {
          __typename: 'Tweet',
          _id: ownProps._id,
          favoriteCount: ownProps.isFavorited ? ownProps.favoriteCount - 1 : ownProps.favoriteCount + 1,
          isFavorited: !ownProps.isFavorited
        }
      }
    })
  })
})(FeedCard)
