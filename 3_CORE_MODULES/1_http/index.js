const http = require('http')
const port = 3000

const server = http.createServer((req,res) => {
    res.write('Eae')
    res.end() //Finality response after shower res (para não rodar infinitamente)
    
})

server.listen(port, () =>{
    console.log(`Servidor rodando na porta: ${port}`)
})