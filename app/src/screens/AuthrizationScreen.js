import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {colors} from '../utils/constants'

class AuthrizationScreen extends Component {
  startPress = () => {

  }
  render () {
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight style={styles.buttonContent} onPress={this.startPress}>
          <Text style={styles.buttonText}>Get Start</Text>
        </TouchableHighlight>
        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <Text style={styles.bottomContainerText}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.SECONDARY,
    position: 'relative'
  },
  buttonContent: {
    height: 60,
    width: 150,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '30%',
    right: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: '#000'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.WHITE
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainerText: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '400'
  }
})
export default AuthrizationScreen
