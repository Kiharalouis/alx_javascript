#!/usr/bin/node
const myObject = {
   type: 'object',
   value: 12
 };
 console.log(myObject);
 
 // Define the incr function as a property of myObject
 myObject.incr = function() {
   // Increment the value property of myObject
   this.value++;
 };
 
 // Call the incr function to increment the value property
 myObject.incr();
 console.log(myObject);
 myObject.incr();
 console.log(myObject);
 myObject.incr();
 console.log(myObject);
 