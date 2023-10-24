#!/usr/bin/node
const myObject = {
   type: 'object',
   value: 12
 };
 console.log(myObject);
 
 // Define the incr function separately
 function incr() {
   this.value++;
 }
 
 // Assign the incr function to the myObject object
 myObject.incr = incr;
 
 // Call the incr function to increment the value property
 myObject.incr();
 console.log(myObject);
 myObject.incr();
 console.log(myObject);
 myObject.incr();
 console.log(myObject);
 