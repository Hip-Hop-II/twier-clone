import React from 'react'
import { UIManager, AsyncStorage } from 'react-native'
import {ApolloProvider} from 'react-apollo'
import {ThemeProvider} from 'styled-components'
import {AppLoading} from 'expo'
import {
  ActionSheetProvider
} from '@expo/react-native-action-sheet'

import {colors} from './src/utils/constants'
import {client, store} from './src/store'
import {login} from './src/actions/user'

import AppNavigator from './src/navigators/AppNavigator'

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}
console.ignoredYellowBox = ['Remote debugger']

export default class App extends React.Component {
  state = {
    appIsReady: false
  }
  _checkIfToken = async () => {
    try {
      const _store = store
      const token = await AsyncStorage.getItem('@twitteryoutubeclone')
      if (token != null) {
        store.dispatch(login())
      }
    } catch (error) {
      throw error
    }
  }
  componentWillMount () {
    this.setState({appIsReady: true})
    this._checkIfToken()
  }
  render() {
    if (!this.state.appIsReady) {
      return <AppLoading />
    }
    return (
      <ApolloProvider client={client} store={store}>
        <ActionSheetProvider>
          <ThemeProvider theme={colors}>
            <AppNavigator />
          </ThemeProvider>
        </ActionSheetProvider>
      </ApolloProvider>
    )
  }
}
