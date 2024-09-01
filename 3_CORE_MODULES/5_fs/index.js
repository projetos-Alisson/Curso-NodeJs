const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req,res) => {
    fs.readFile('mensagem.html', function(err,data) {
        res.writeHead(200, { 'Contenty-Type': 'text/html'})
        res.write(data)
        return res.end() //end the response
    })
})

server.listen(port, () =>{
    console.log(`Servidor rodando na porta: ${port}`)
})