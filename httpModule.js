const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('hello there')
    }
    if(req.url ==='/about'){
        res.end('here is about page')
    }
    res.end(`
    <h1>Oppps</h1>
    <p>sorry we cant find the page</p>
    <a href ='/'>home</a>
    `)
})

server.listen(5000)