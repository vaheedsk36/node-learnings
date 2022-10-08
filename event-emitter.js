const {EventEmitter} = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('response',()=>{
    console.log('response')
})

eventEmitter.emit('response');

