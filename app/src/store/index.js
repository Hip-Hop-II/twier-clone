import {createStore, applyMiddleware} from 'redux'
import {ApolloClient, createNetworkInterface} from 'apollo-client'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createNavigationPropConstructor, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'

import reducers from '../reducers'

const networkInterface = createNetworkInterface({
  uri: 'http://192.168.1.5:3000/graphql'
})

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
