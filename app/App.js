import React from 'react'
import { UIManager } from 'react-native'
import {ApolloProvider} from 'react-apollo'
import {ThemeProvider} from 'styled-components'
import {AppLoading} from 'expo'

import {colors} from './src/utils/constants'
import {client, store} from './src/store'

import AppNavigator from './src/navigators/AppNavigator'

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}
console.ignoredYellowBox = ['Remote debugger']

export default class App extends React.Component {
  state = {
    appIsReady: false
  }
  componentWillMount () {
    this.setState({appIsReady: true})
  }
  render() {
    if (!this.state.appIsReady) {
      return <AppLoading />
    }
    return (
      <ApolloProvider client={client} store={store}>
        <ThemeProvider theme={colors}>
          <AppNavigator />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}
