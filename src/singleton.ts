var person = new (function () {
  this.name = "Sudheer";
})();

// wierd way to create a singleton. Function becomes unavailable so cannot create the object again.
