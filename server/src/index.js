import express from 'express'
import bodyParser from 'body-parser'
import constants from './config/constants'
import {createServer} from 'http'
import mock from './mock'

// graphql
import {makeExecutableSchema} from 'graphql-tools'
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'

import './config/db'

const app = express()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
app.use(bodyParser.json())
app.use('/graphiql', graphiqlExpress({
  endpointURL: constants.GRAPHQL_PATH
}))
app.use(constants.GRAPHQL_PATH, graphqlExpress({
  schema
}))

const graphQLServer = createServer(app)

mock().then(() => {
  graphQLServer.listen(constants.PORT, err => {
    if (err) {
      console.error(err)
    } else {
      console.log(`App listen to port: ${constants.PORT}`)
    }
  })
})
