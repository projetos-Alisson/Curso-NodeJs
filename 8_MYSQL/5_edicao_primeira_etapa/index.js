const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


//Middleware 
app.use(
  express.urlencoded({
    extended: true,
  }),
)

//Get the responde of the body and convert in json file
app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

//INSERT ROUTE - Add books the table
app.post('/books/insertbook', (req, res) =>{
  const title = req.body.title;
  const pageqty = req.body.pageqty;
  
  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty} ')`

  conn.query(sql, function (err){
    if(err){
      console.log(err)
    }
    res.redirect('/books')
  })

})

//SELECT ROUTE - Select all books
app.get('/books', (req, res) =>{
  const sql = `SELECT * FROM books`;

    conn.query(sql, function(err, data){
      if(err){
        console.log("Ocorreu um erro: ", err)
      }

      const books = data
      console.log(data)

      res.render('books', {books})


    })
})

//WHERE ROUTE - Filter book

app.get('/books/:id', (req,res) =>{

    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, function(err, data){

      if(err){
        console.log(err)
      }

      const book = data[0] //data retorna um array; é nedessário colcoar o índice do 1° livro
      console.log(data)

      res.render('book', {book})
    })
})



//EDIT BOOK
app.get('/books/edit/:id', (req,res) =>{
  const id = req.params.id;
  const sql = `SELECT * FROM books WHERE id = ${id}`

  
  conn.query(sql, function(err, data){

    if(err) console.log(err);

    const book = data[0];

    res.render('editbook', {book})

  })
})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', 
  database: 'cursonode',
})

conn.connect(function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Conectado ao MySQL!')

  app.listen(3000)
})
