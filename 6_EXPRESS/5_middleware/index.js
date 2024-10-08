const express = require('express')
const app = express()
const port = 3000

const path = require('path')
//Place where the html file is
const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next){
  req.authStatus = true;

   if(req.authStatus){
    console.log('Está logado, prossiga');
      next()
   }else{
    console.log('Não está logado. Faça Login')
   }
}

app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})