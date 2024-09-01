const express = require('express')
const app = express()
const port = 3000

const path = require('path')


//Set path of the "users"
const users = require('./users')

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

//STATIC FILE
app.use(express.static('public'))


//Main Route
const basePath = path.join(__dirname, 'templates')

//MIDDLEWARE IMPORTED
app.use('/users', users)


//Home Page
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})