const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`<h1>Welcome to our home page</h1>`);
    }else if(req.url === '/about'){
        res.end(`<h1>Welcome to our about page</h1>`);
    }else{
        res.end(`
        <h1>OOps!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href='/'>Back Home</a>
        `);
    }
})

server.listen(50000,()=>{
  console.log('server listening at port 50000');
});