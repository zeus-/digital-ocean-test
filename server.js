const express = require('express')
const app = express()

const path = require('path')
const fs = require('fs')

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
