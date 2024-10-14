const express = require('express')
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set('views', './views');

app.use(express.static('public'))

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


app.get('/blog', (req,res) => {
  const posts = [
    {
    title: "A história de Naruto",
    category: ["Anime", "Comédia", "Aventura"],
    body: "Um jovem genin de uma aldeia ninja, sonha em um dia se tornar...",
    comments: 4
  },
   {
    title: "A história de Death Note",
    category: ["Anime", "Investigação", "Aventura", "Ação"],
    body: "Um estudante encontra um caderno capaz de...",
    comments: 6
  },
   {
    title: "A história de Yu Yu Hakusho",
    category: ["Anime", "Comédia", "Aventura"],
    body: "Yusuke Urameshi torna-se um detetive espiritual...",
    comments: 3
  }
]

res.render('blog', {posts})
  
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
