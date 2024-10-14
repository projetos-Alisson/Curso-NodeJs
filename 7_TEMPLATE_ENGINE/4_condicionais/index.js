const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static("public"))
app.get('/dashboard', function(req,res){
  res.render('dashboard')
}) 


app.get('/', function (req, res) {

  const user = {
    name: "Alisson",
    surname: "Soares",
    age: "19"
  }

  const hobby = "Desenhar"
  const auth = true

  //Make variables available on the front end
  res.render('home', {user: user, hobby, auth})
})


app.listen(3000)
