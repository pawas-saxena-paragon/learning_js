```javascript
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  // Custom methods and properties
}

const myObject = new MyEmitter();

myObject.on("customEvent", () => {
  console.log("Custom event triggered.");
});

myObject.emit("customEvent");
```
