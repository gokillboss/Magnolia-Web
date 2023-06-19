const express = require('express')
require('dotenv').config()
const webRouter = require('./routes/web')

const app = express()
const port = process.env.PORT || 8080

app.use('/test',webRouter)

app.listen(port, ()=>{
  console.log(`App is listening on port ${port}`)
})                                                          