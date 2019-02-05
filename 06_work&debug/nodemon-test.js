// Load module dependencies
var http = require('http');

http.createServer(function(request, response) {
        response.writeHead(200, {
            'Content-Type':'text/html'
        });
        response.end('tests');
}).listen(3000);

console.log('node server running on port 3000');