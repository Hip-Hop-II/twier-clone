import bodyParser from 'body-parser'
import constants from './constants'
import {decodeToken} from '../services/auth'

// graphql
import {makeExecutableSchema} from 'graphql-tools'
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express'
import typeDefs from '../graphql/schema'
import resolvers from '../graphql/resolvers'

// graphql类型和查询
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// 所有的接口验证同时将 {user} 传递下去
async function auth (req, res, next) {
  try {
    const token = req.headers.authorization
    if (token) {
      const user = await decodeToken(token)
      req.user = user
    } else {
      req.user = null
    }
    return next()
  } catch (error) {
    throw error
  }
}

export default app => {
  app.use(bodyParser.json())
  app.use(auth)
  // grapql调试工具
  app.use('/graphiql', graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH
  }))
  app.use(constants.GRAPHQL_PATH, graphqlExpress(req => ({
    schema,
    context: {
      user: req.user
    }
  })))
  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    if (req.method === 'OPTIONS') {
      res.send(200)
    } else {
      next()
    }
  })
}
