
/* 
const sayHello  = function () {
   console.log("Hello, world");
}

  sayHello();
*/

/* Example 2
const sayHello  = function (name) {
  console.log("Hello, " + name + "!");
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
*/

/*
const sayHelloToConsole  = function (name) {    //console.log prints right away
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 
*/


const returnSayHello  = function (name) {   //return store the value in the function(doesn't print)
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

console.log(greeting);    //prints anytime in the code 