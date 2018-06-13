import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {colors} from '../../utils/constants'
import CommentButton from '../Buttons/CommentButton'


export default class FeedCardBottom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favorite: false
    }
  }
  commentPressHandle = (type) => {

  }
  retweetPressHandle = () => {

  }
  heartPressHandle = () => {
    this.setState({
      favorite: !this.state.favorite
    })
  }
  render () {
    const {favoriteCount, onFavoritePress, isFavorited} = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <CommentButton 
            buttonPress={this.commentPressHandle}
            icons={
              <Icon 
              name="comment-o"
              size={20}
              color={colors.LIGHT_GRAY}
              />
            }
          />
          <Text>0</Text>
        </View>
        <View style={styles.container}>
          <CommentButton 
            buttonPress={this.retweetPressHandle}
            icons={
              <Icon 
              name="retweet"
              size={20}
              color={colors.LIGHT_GRAY}
              />
            }
          />
          <Text>0</Text>
        </View>
        <View style={styles.container}>
          <CommentButton
            buttonPress={() => onFavoritePress()}
            icons={
              <Icon 
              name={isFavorited ? 'heart' : 'heart-o' }
              size={20}
              color={isFavorited ? colors.DANGER : colors.LIGHT_GRAY}
              />
            }
          />
          <Text>{favoriteCount}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 34
  }
})
