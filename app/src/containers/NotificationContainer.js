import React, { Component  } from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import {colors} from '../utils/constants'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class NotificationContainer extends Component {
  static navigationOptions = () => ({
    tabBarIcon: ({tintColor}) => (
      <Icon
        size={24}
        name='bell'
        color={tintColor}
      />
    )
  })
  render () {
    return (
      <View style={styles.homeWrapper}>
        <Text>hello notice</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#f2f2f2'
  }
})
