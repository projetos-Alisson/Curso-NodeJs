const fs = require('fs')

const file = "arquivo.txt"
const newFile = "novoarquivo.txt"

fs.rename(file, newFile, (err) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(`${file} foi renomeado para ${newFile} com sucesso!`)
})