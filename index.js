const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if(req.url === "/greetings"){
    res.end("greeting")
  }
  else if(req.url === "/v5/greetings"){
    res.end("v5 greeting")
  }
  else {
    const msg = 'Hello world!\n'
    res.end(msg); 
  }

  });

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});