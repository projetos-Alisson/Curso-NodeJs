const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')


//READ DATAS OF THE POST


//Read the body tag - configuration of the middlewares
{
  app.use(
      express.urlencoded({
        extended: true,
      }),
  )

  app.use(express.json())

}

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

//Post Route that will use the request to send RESPONSE
app.post('/users/save', (req, res) =>{
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)


})

//MAIN ROUTE
app.get('/users/:id', (req, res) => {
  const id = req.params.id
 
  //Read users table. rescue a user  of the database
    console.log(`Buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`) //*Responda enviando o caminho do arquivo users.html

})


//FILE HIDE FOR FACILITATE IN READING
{ 
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/users.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})

}
