const http = require('http');

// Using EventEmitter APi
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request',(req,res)=>{
    if(req.url === '/'){
      res.end('welcome');
    }
});

server.listen(8000);