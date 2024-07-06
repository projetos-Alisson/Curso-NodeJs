const fs = require('fs') //file system


fs.readFile('arquivo.txt', 'utf8', (err, data) =>{

    if(err){
        console.log(err)
        return
    }

    console.log(data)
})


//Rename File
fs.rename('./arquiv.txt', './novo_arquivo.txt', (error) =>{
    if(error){
        console.log(error)
    }

    console.log("Renomeação feita")
})
