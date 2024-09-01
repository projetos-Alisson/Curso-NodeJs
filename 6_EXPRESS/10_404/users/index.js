var express = require('express')
var router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')


//This path, will router through "app.use('/users', users)"
router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

  //Redirect after send of the informations
  res.sendFile(`${basePath}/userform.html`)
})


router.get('/:id', (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`)

  res.sendFile(`${basePath}/users.html`)
})

module.exports = router