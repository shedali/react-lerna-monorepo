const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.resolve(__dirname)))
app.use('/react-app-1', express.static(path.resolve(__dirname, 'public/react-app-1/build')))
app.use('/react-app-2', express.static(path.resolve(__dirname, 'public/react-app-2/build')))

app.listen(3000, () => {
  console.log('listening on port 3000')
})