const express = require('express');
const app = express()
const port = 3000

//Declaration modules relative to handlebars
const exphbs = require('express-handlebars')

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

//Handlebars configuration 
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set('views', './views');

//Configuration css folder
app.use(express.static('public'))

//Routes of the shop

app.get('/', (req, res) =>{

   const lojaNome = "Casa do Game"

    res.render('home', {lojaNome})
})


app.get('/produtos', (req, res) =>{

  products = [
    
    {
    nome: "Super Mario Odyssey",
    preço: "R$300,00",
    
  },
  
    {
    nome: "Katana Zero",
    preço: "R$20,00",
    
  },
  
    {
    nome: "Hades",
    preço: "R$45,00",
    
  },
  
    {
    nome: "Batman Arkham Knight",
    preço: "R$30,00",
    
  },

  


]
  res.render('produtos', {products})
})


app.listen( port)