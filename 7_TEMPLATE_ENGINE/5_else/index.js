const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/dashboard', function(req,res){
  res.render('dashboard')
})


app.get('/', function (req, res) {

  const user = {
    name: "Alisson",
    surname: "Soares",
    age: "19"
  }

  //VARIABLES
  const hobby = "Desenhar"
  const auth = true
  const approved = false

  //Make variables available on the front end
  res.render('home', {user: user, hobby, auth, approved})
})


app.listen(3000)
