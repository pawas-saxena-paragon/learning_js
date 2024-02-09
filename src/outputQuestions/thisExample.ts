function Person() {}

Person.prototype.walk = function () {
  return this;
};

Person.run = function () {
  return this;
};

let user = new Person();
let walk = user.walk;
console.log(walk()); // global
console.log(user.walk()); // Person object

let run = Person.run;
console.log(run()); // global
console.log(Person.run()); // Person object
/**
 * When walk() is called, this inside the walk function refers to the object on which the method is invoked.
 *  In this case, walk() is called without any specific context (as a standalone function),
 * so this will refer to the global object (window in a browser environment).
 */
