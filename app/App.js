import React from 'react'
import { UIManager } from 'react-native'
import {ApolloProvider} from 'react-apollo'
import {ThemeProvider} from 'styled-components'

import {colors} from './src/utils/constants'
import {client, store} from './src/store'

import Home from './src/navigators/AppNavigator'

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}
console.ignoredYellowBox = ['Remote debugger']

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <ThemeProvider theme={colors}>
          <Home />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}
