import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import {initializeListeners} from 'react-navigation-redux-helpers'

import {navigationPropConstructor} from '../store'
import HomeContainer from '../containers/HomeContainer'
import ExploreContainer from '../containers/ExploreContainer'
import NotificationContainer from '../containers/NotificationContainer'
import UserContainer from '../containers/UserContainer'
import AuthrizationScreen from '../screens/AuthrizationScreen'
import SignupScreen from '../screens/SignupScreen'

import {colors} from '../utils/constants'

const Tabs = createBottomTabNavigator ({
  Home: {
    screen: HomeContainer
  },
  Explore: {
    screen: ExploreContainer
  },
  Notice: {
    screen: NotificationContainer
  },
  User: {
    screen: UserContainer
  }
},
{
  mode: 'modal',
  initialRouteName: 'Home',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: colors.PRIMARY,
    inactiveTintColor: colors.LIGHT_GRAY,
    style: {
      backgroundColor: colors.WHITE,
      height: 50,
      paddingVertical: 5
    }
  }
})

export const AppNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.WHITE
      },
      headerTitleStyle: {
        fontWeight: '700',
        color: colors.SECONDARY
      },
    })
  },
  Signup: {
    screen: SignupScreen
  },
  Auth: {
    screen: AuthrizationScreen
  }
}, {
  initialRouteName: 'Auth',
  mode: 'modal'
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
    const navigation = navigationPropConstructor(dispatch, nav)
    // if (!this.props.user.isAuthenticated) {
    //   return <AuthrizationScreen navigation={navigation} />
    // }
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