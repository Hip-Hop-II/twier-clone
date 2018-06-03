import React from 'react'
import { UIManager, View, Text } from 'react-native'
import {ApolloProvider} from 'react-apollo'
import {ThemeProvider} from 'styled-components'

import {colors} from './src/utils/constants'
import {client, store} from './src/store'

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <ThemeProvider theme={colors}>
          <View>
            <Text>hello world</Text>
          </View>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
