import {createStore, applyMiddleware} from 'redux'
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const networkInterface = createNetworkInterface({
})

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

const middlewares = [client.middleware(), thunk]

export const store = createStore(
  reducers(client),
  undefined,
  applyMiddleware(...middlewares)
)
