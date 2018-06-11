import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AsyncStorage} from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import {initializeListeners} from 'react-navigation-redux-helpers'

import {navigationPropConstructor} from '../store'

import AuthrizationScreen from '../screens/AuthrizationScreen'
import SignupScreen from '../screens/SignupScreen'
import NewTweetScreen from '../screens/NewTweetScreen'
import LoggedTabNavigator from './LoggedTabNavigator'

export const AppNavigator = createStackNavigator({
  Auth: {
    screen: AuthrizationScreen
  },
  Signup: {
    screen: SignupScreen
  },
  Home: {
    screen: LoggedTabNavigator,
    navigationOptions: () => ({
      /* headerStyle: {
        backgroundColor: colors.WHITE
      },
      headerTitleStyle: {
        fontWeight: '700',
        color: colors.SECONDARY
      }, */
      header: null
    })
  },
  NewTweet: {
    screen: NewTweetScreen
  }
}, {
  mode: 'modal',
  initialRouteName: 'Home',
})

class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  }
  componentDidMount () {
    initializeListeners('root', this.props.nav)
  }
  render () {
    const {dispatch, nav} = this.props
    console.log(this.props)
    const navigation = navigationPropConstructor(dispatch, nav)
    return (
      <AppNavigator navigation={navigation} />
    )
  }
}
const mapStateToProps = state => ({
  nav: state.nav,
  user: state.user
})

export default connect(mapStateToProps)(AppWithNavigationState)