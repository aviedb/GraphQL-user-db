const express = require('express')
const expressGraphQL = require('express-graphql')

const schema = require('./schema/schema')

const app = express()
const port = process.env.PORT || 4000

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
