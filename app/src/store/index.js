import {createStore, applyMiddleware} from 'redux'
import {ApolloClient, createNetworkInterface} from 'apollo-client'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createNavigationPropConstructor, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'

import reducers from '../reducers'

const networkInterface = createNetworkInterface({
  uri: 'http://172.16.12.105:3000/graphql'
})

export const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

export const navigationPropConstructor = createNavigationPropConstructor('root')

export const client = new ApolloClient({
  networkInterface
})
console.log(client)
const middlewares = [client.middleware(), thunk]

export const store = createStore(
  reducers(client),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeWithDevTools(applyMiddleware(...middlewares)),
)
