const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

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

  pool.query(sql, function (err){
    if(err){
      console.log(err)
    }
    res.redirect('/books')
  })

})

//SELECT ROUTE - Select all books
app.get('/books', (req, res) =>{
  const sql = `SELECT * FROM books`;

    pool.query(sql, function(err, data){
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

    pool.query(sql, function(err, data){

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

  
  pool.query(sql, function(err, data){

    if(err) console.log(err);

    const book = data[0];

    res.render('editbook', {book})

  })
})

//UPDATE BOOK

app.post('/books/updatebook', (req,res) =>{
    const id = req.body.id;
    const title = req.body.title;
    const pageqty = req.body.pageqty;
  
    const sql = `UPDATE books SET  title = '${title}', pageqty = '${pageqty}' WHERE id = ${id} `
  
    pool.query(sql, function (err){
      if(err){
        console.log(err)
      }
      res.redirect('/books')
    })
    
})


app.post('/books/remove/:id', (req,res) =>{
  const id = req.params.id;
  const title = req.body.title
  

  const sql = `DELETE FROM books WHERE id = ${id}`

  pool.query(sql, function (err){
    if(err){
      console.log(err)
    }

    console.log(`O livro "${title} acaba de ser apagado`)
    res.redirect('/books')
  })
  
})

app.listen(3000)

