//Módulo externo
const minimist = require('minimist')

//Módulo interno
const args = minimist(process.argv.slice(2))
const soma = require('./soma').soma

soma(2,2)
