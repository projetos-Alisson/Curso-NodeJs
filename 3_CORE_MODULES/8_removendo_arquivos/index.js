const fs = require('fs')

fs.unlink('removed.txt', (err) =>{
    if(err){
        console.log(err)
        return
    }
    console.log('Arquivo removido!')
})
