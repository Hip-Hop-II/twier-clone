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
  buttonPressHandle = (type) => {

  }
  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <CommentButton 
            buttonPress={this.buttonPressHandle}
            icons={
              <Icon 
              name="comment-o"
              size={20}
              color={colors.LIGHT_GRAY}
              />
            }
          />
          <Text>3</Text>
        </View>
        <View style={styles.container}>
          <CommentButton 
            buttonPress={this.buttonPressHandle}
            icons={
              <Icon 
              name="retweet"
              size={20}
              color={colors.LIGHT_GRAY}
              />
            }
          />
          <Text>3</Text>
        </View>
        <View style={styles.container}>
          <CommentButton 
            buttonPress={this.buttonPressHandle}
            icons={
              <Icon 
              name="heart-o"
              size={20}
              color={colors.LIGHT_GRAY}
              />
            }
          />
          <Text>3</Text>
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
