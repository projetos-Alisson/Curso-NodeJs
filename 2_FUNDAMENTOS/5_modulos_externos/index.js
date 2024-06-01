const minimist = require('minimist')
const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const game = args['game']

console.log(`${nome} ama jogar ${game}`)