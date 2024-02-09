In Node.js, streams are a powerful and efficient way to handle data flow, especially when dealing with large amounts of data. Streams provide an abstraction that allows you to read from or write to a source continuously in chunks, rather than loading the entire data into memory at once. There are several types of streams in Node.js, including Readable, Writable, Duplex, and Transform streams. Here are examples of each type:

### 1. **Readable Stream Example:**

A Readable stream is used to read data from a source.

```javascript
const fs = require('fs');

// Create a Readable stream from a file
const readableStream = fs.createReadStream('input.txt', 'utf-8');

// Listen for 'data' event
readableStream.on('data', (chunk) => {
  console.log(`Received chunk: ${chunk}`);
});

// Listen for 'end' event
readableStream.on('end', () => {
  console.log('Reading finished.');
});
```

In this example, data is read from the file `input.txt` in chunks and logged to the console.

### 2. **Writable Stream Example:**

A Writable stream is used to write data to a destination.

```javascript
const fs = require('fs');

// Create a Writable stream to a file
const writableStream = fs.createWriteStream('output.txt', 'utf-8');

// Write data to the stream
writableStream.write('Hello, ');
writableStream.write('World!');
writableStream.end();  // End the stream

// Listen for 'finish' event
writableStream.on('finish', () => {
  console.log('Writing finished.');
});
```

In this example, data is written to the file `output.txt`.

### 3. **Duplex Stream Example:**

A Duplex stream represents a stream that is both readable and writable.

```javascript
const { Duplex } = require('stream');

// Custom Duplex stream
const duplexStream = new Duplex({
  read(size) {
    this.push('Read: Hello, World!');
    this.push(null);
  },
  write(chunk, encoding, callback) {
    console.log(`Write: ${chunk.toString()}`);
    callback();
  }
});

// Pipe the Duplex stream to the console
duplexStream.pipe(process.stdout);
```

In this example, a custom Duplex stream is created, which is both readable and writable. Data is pushed to the readable side and written to the writable side.

### 4. **Transform Stream Example:**

A Transform stream is a type of duplex stream that allows for data transformation during the read and write operations.

```javascript
const { Transform } = require('stream');

// Custom Transform stream to convert data to uppercase
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// Pipe the Transform stream to the console
transformStream.pipe(process.stdout);

// Write data to the stream
transformStream.write('Hello, ');
transformStream.write('World!');
transformStream.end();
```

In this example, a custom Transform stream is created to convert data to uppercase before writing it to the console.

These examples illustrate the basic usage of different types of streams in Node.js. Streams are particularly useful for handling large datasets efficiently, and they play a crucial role in various modules and libraries within the Node.js ecosystem.