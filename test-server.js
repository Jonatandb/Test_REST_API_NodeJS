const http = require('http');
const port = 3001;
const server = http.createServer();

server.on('request', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.end('Hola, server!');
});

server.listen(port, (error) => {
    if(error) return console.log(`Error: ${error}`);
    console.log(`Server is listeninig on port ${port}`);
})

