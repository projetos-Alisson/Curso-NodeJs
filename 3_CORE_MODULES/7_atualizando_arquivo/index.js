const http = require('http')
const fs = require('fs')


const port = 3000

const server = http.createServer((req,res) => {
  
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name;

    if(!name){
        fs.readFile('index.html', function(err,data) {
            res.writeHead(200, { 'Contenty-Type': 'text/html'})
            res.write(data)
            return res.end() //end the response
        })
    }else{
        const nameNewLine = name + ',\r\n' //Separado para haver quebra de linha pra Linux e Windows (virgula opcional)
           fs.appendFile("arquivo.txt", nameNewLine , function(err, data){
            res.writeHead(302, { //302 - Indica que o navegador direcionou pra URL específica
                Location: '/',
            })
            return res.end()
        })
      
    }

 
})

server.listen(port, () =>{
    console.log(`Servidor rodando na porta: ${port}`)
})