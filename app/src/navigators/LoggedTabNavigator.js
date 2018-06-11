import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeContainer from '../containers/HomeContainer'

import ExploreContainer from '../containers/ExploreContainer'
import NotificationContainer from '../containers/NotificationContainer'
import UserContainer from '../containers/UserContainer'

import Icon from 'react-native-vector-icons/FontAwesome'

import {colors} from '../utils/constants'

const Tabs = createBottomTabNavigator ({
  HomeMain: {
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

export default Tabs
