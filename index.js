const http = require("http"); 
const { numarray } = require("./data");
http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
    case '/about.html':
        const fs = require("fs");
   fs.readFile("about.html", (err, data) => {
     if (err) return console.error(err);
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data.toString());
  });
      break;
      case '/':
        const fs1 = require("fs");  
   fs1.readFile("home.html", (err, data) => {
     if (err) return console.error(err);
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data.toString());
  });
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);