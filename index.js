const http =  require('http')

//New Call Back Function
//http://localhost/
const server = http.createServer((req, res) => {
    //res.setHeader('content-Type','text/html');
    res.writeHead(200,{'content-Type':'text/html'});
    res.write('<h1>Hello World!</h1>');
    //res.statusCode = 200 ;
    return res.end();
})
server.listen(5000,() => {
    console.log(`Server runnig at http://localhost:5000`)
});


//Old Call Back Function
//http.createsever(function(){
    //res.setHeadder('content-Type','text/plain')
    //res.write('Hello World!')
    //res.statusCode = 200 
    //res.end
//})