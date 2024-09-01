const express = require('express')
const app = express()
const port = 3000

const path = require('path')
//Place where the html file is
const basePath = path.join(__dirname, 'templates')


app.get('/users/:id', (req, res) => {
  const id = req.params.id
 
  //Read users table. rescue a user  of the database
    console.log(`Buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)

})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/users.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})