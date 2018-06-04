import {createStore, applyMiddleware} from 'redux'
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import reducers from '../reducers'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
})

export const client = new ApolloClient({
  networkInterface
})

const middlewares = [client.middleware(), thunk]

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
)
