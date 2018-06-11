import {createStore, applyMiddleware} from 'redux'
import {ApolloClient, createNetworkInterface} from 'apollo-client'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {AsyncStorage} from 'react-native'
import {createLogger} from 'redux-logger'
import {createNavigationPropConstructor, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'

import reducers from '../reducers'
import { onErrorResumeNext } from 'rxjs/operator/onErrorResumeNext';

const networkInterface = createNetworkInterface({
  uri: 'http://192.168.1.5:3000/graphql'
})

networkInterface.use([{
  async applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    try {
      const token = await AsyncStorage.getItem('@twitteryoutubeclone')
      if (token != null) {
        req.options.headers.authorization = `Bearer ${token}`
      } else {
        req.options.headers.authorization = null
      }
    } catch (error) {
      throw error
    }
    return next()
  }
}])

export const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

export const navigationPropConstructor = createNavigationPropConstructor('root')

export const client = new ApolloClient({
  networkInterface
})
const logger = process.env.NODE_ENV === 'development' ? createLogger() : null
const middlewares = [client.middleware(), thunk, logger]

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
)
