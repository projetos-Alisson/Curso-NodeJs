const http = require('http')
const port = 3000

const server = http.createServer((req,res) => {
    res.statusCode = 200 //Indica que foi bem sucedido o acesso
    res.setHeader('Contenty-Type', 'text/html') //Indica o tipo de conteúdo
    res.end('<h1>Olá, este é o meu primeiro server com HTML!</h1>') //Finality response after shower res (para não rodar infinitamente)
    
})

server.listen(port, () =>{
    console.log(`Servidor rodando na porta: ${port}`)
})