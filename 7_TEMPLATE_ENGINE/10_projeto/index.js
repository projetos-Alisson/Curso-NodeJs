const express = require('express');
const app = express()
const path = require('path');
const port = 3000

//Declaration modules relative to handlebars
const exphbs = require('express-handlebars')

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

//Handlebars configuration with partials
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set('views', './views');

//Configuration css folder
app.use(express.static(path.join(__dirname,'public')));




const products = [
    
  {
    id: 1,
  nome: "Super Mario Odyssey",
  preco: "R$300,00",
  image: "/img/mario.jpg",

  
},

  {
    id: 2,
    nome: "Katana Zero",
    preco: "R$20,00",
   image: "/img/katana-zero.jpg",

},

  {
    id: 3,
    nome: "Hades",
    preco: "R$45,00",
    image: "/img/hades.jpg",

},

  {
    id: 4,
    nome: "Batman Arkham Knight",
    preco: "R$30,00",
    image: "/img/batman.jpg",

},

]


//Routes of the shop
app.get('/', (req, res) =>{

   const lojaNome = "Casa do Game"

    res.render('home', {lojaNome, products})
})

app.get("/produto/:id", (req, res) => {
  const product = products[parseInt(req.params.id) -1]
 
  res.render('produto', {product})

})



app.listen(port)