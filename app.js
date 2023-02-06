const http = require('http')
//1.Create a server object
http.createServer((req,res) => {
    //1.1 Get:http://localhoat:5000/
    if (req.url === '/') { 
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('Welcome to home page')
        return res.end() 
    }
    else if(req.url == '/about'){ //Get:http://localhoat:5000/
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('Welcome to About page')
        return res.end()
    }
    else if(req.url == '/admin'){ //Get:http://localhoat:5000/
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('Welcome to Admin page')
        return res.end()
    }
    else {
        res.writeHead(404,{'content-Type':'text/html'});
        res.write('NOT FOND 404')
        return res.end()
    }
}).listen(5000, () => {
    console.log('Running at http://localhost:5000')
})
//2.Run server