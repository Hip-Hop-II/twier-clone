import React, { Component  } from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import {colors} from '../utils/constants'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HomeContainer extends Component {
  static navigationOptions = () => ({
    headerTitle: '我的',
    tabBarIcon: ({tintColor}) => (
      <Icon
        size={24}
        name='user'
        color={tintColor}
      />
    )
  })
  render () {
    return (
      <View style={styles.homeWrapper}>
        <Text>hello user</Text>
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
