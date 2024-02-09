The `cluster` module in Node.js allows you to create child processes that share server ports. This module is particularly useful for utilizing multiple CPU cores effectively, improving the performance and scalability of your Node.js applications. Here's an explanation of the `cluster` module with examples:

### Basic Example:

**main.js:**

```javascript
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master process is running with ${numCPUs} CPU cores`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for worker exit and fork a new one
  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} exited with code ${code} and signal ${signal}`
    );
    console.log("Forking a new worker...");
    cluster.fork();
  });
} else {
  // Each worker process handles HTTP requests
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello from worker process!");
    })
    .listen(3000);

  console.log(`Worker process ${process.pid} is listening on port 3000`);
}
```
