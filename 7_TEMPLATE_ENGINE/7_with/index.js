const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/dashboard', function(req,res){
  const items = ['Item 1', "Item 2", "Item 3"]
  res.render('dashboard', {items})
})

app.get('/post', (req,res) => {
   const post = {
    title: "A história de Naruto",
    category: ["Anime", "Comédia", "Aventura"],
    body: "Um jovem genin de uma aldeia ninja, sonha em um dia se tornar...",
    comments: 4,
  }

  res.render('blogpost', {post})
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
