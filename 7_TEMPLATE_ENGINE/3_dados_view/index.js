const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {

  const user = {
    name: "Alisson",
    surname: "Soares",
    age: "19"
  }

  const hobby = "Desenhar"


  //Make variables available on the front end
  res.render('home', {user: user, hobby})
})

app.listen(3000)
