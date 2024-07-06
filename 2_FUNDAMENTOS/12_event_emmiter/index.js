//Event Emmiter, selects some point of the code, for execute
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
  console.log('Durante')
})

console.log('Antes')

eventEmitter.emit('start')

console.log('Depois')