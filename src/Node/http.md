```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  // Handling different HTTP methods
  if (req.method === "GET") {
    // Handling different paths
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello, World!\n");
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About page\n");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found\n");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed\n");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

### Post

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    if (req.url === "/post") {
      let data = "";

      // Listen for data events to collect the incoming JSON data
      req.on("data", (chunk) => {
        data += chunk;
      });

      // Listen for the end event to parse and process the JSON data
      req.on("end", () => {
        try {
          // Parse the JSON data
          const requestData = JSON.parse(data);

          // Respond with the received JSON data
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(requestData));
        } catch (error) {
          // Handle JSON parsing errors
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Bad Request: Invalid JSON\n");
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found\n");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed\n");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```
