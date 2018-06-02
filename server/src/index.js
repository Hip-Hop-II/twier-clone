import express from 'express'
import constants from './config/constants'
import {createServer} from 'http'
import middlewares from './config/middlewares'
import mock from './mock'

import './config/db'

const app = express()

// 中间件
middlewares(app)

const graphQLServer = createServer(app)

// mock().then(() => {
graphQLServer.listen(constants.PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`App listen to port: ${constants.PORT}`)
  }
})
// })
