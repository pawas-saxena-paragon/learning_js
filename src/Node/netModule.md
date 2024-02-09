In Node.js, the `net` module provides an asynchronous network API for creating stream-based TCP servers (net.Server) and clients (net.Socket). It is a core module, so there is no need to install it separately. The `net` module is built on top of the lower-level `stream` module and provides a straightforward interface for creating TCP servers and clients.

### Creating a TCP Server:

To create a TCP server, you can use the `net.createServer()` method. Here's a basic example:

```javascript
const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  // 'socket' is a Duplex stream (Readable and Writable)

  // Handle data received from the client
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
  });

  // Handle client connection termination
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Listen on a specific port and IP address
const PORT = 3000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
```

In this example, a TCP server is created using `net.createServer()`. The server listens for connections and handles incoming data and client disconnections.

### Creating a TCP Client:

To create a TCP client, you can use the `net.createConnection()` method. Here's a basic example:

```javascript
const net = require('net');

// Create a TCP client
const client = net.createConnection({ port: 3000, host: '127.0.0.1' }, () => {
  // 'client' is a Duplex stream (Readable and Writable)

  // Send data to the server
  client.write('Hello, server!');
});

// Handle data received from the server
client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
});

// Handle server connection termination
client.on('end', () => {
  console.log('Server disconnected');
});
```

In this example, a TCP client is created using `net.createConnection()`. The client connects to the server, sends data, and handles incoming data and server disconnections.

### TLS/SSL Support:

The `net` module also has a counterpart for secure communication called the `tls` module. It provides TLS/SSL encryption for TCP servers and clients. The secure server and client implementations are very similar to their non-secure counterparts.

These are basic examples, and in real-world scenarios, you might handle errors, implement more robust communication protocols, and deal with more complex logic. Additionally, the `net` module provides various events and methods for handling different aspects of network communication.