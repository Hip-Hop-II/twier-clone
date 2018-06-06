import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import SignupForm from '../components/Form/SignupForm'
import Icon from 'react-native-vector-icons/FontAwesome'
import {colors} from '../utils/constants'

const initState = {
  showLogin: false,
  showSignup: false
}
class AuthrizationScreen extends Component {
  static navigationOptions = () => ({
    header: null
  })
  state = initState
  startPress = () => {
    console.log(this.props.navigation.navigate)
    this.props.navigation.navigate('Signup')
  }
  render () {
    const {showSignup} = this.state
    if (showSignup) {
      return (
        <View style={styles.wrapper}>
          <SignupForm />
        </View>
      )
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <Icon name="twitter" 
            size={30}
            color={colors.PRIMARY}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.caption}>查看世界当前正在发生的事情。</Text>
          <TouchableHighlight style={styles.buttonContent} onPress={this.startPress}>
            <Text style={styles.buttonText}>现在开始</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomContainerCaption}>已有账号？</Text>
          <TouchableOpacity>
            <Text style={styles.bottomContainerText}>登录</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.WHITE,
    position: 'relative'
  },
  heading: {
    position: 'absolute',
    top: '10%',
    left: '10%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  caption: {
    width: '80%',
    fontSize: 26,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20
  },
  buttonContent: {
    height: 40,
    width: '80%',
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: '#000'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.WHITE
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: '10%',
    right: 0,
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  bottomContainerCaption: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.LIGHT_GRAY
  },
  bottomContainerText: {
    color: colors.PRIMARY,
    fontSize: 14,
    fontWeight: '400'
  }
})
export default AuthrizationScreen
