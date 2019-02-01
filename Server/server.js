const http = require('http');

const server = http.createServer((req, res) =>{
  if (req.url === "/"){
    console.log("Peticion recibida.");
    var time = new Date();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(time));
  }
});

server.listen(8080);
console.log("Servidor funcionando en http://localhost:8080/");
