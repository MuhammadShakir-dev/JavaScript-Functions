// different way of defining a function.
// functions are values in JS we can store them we can pass them and we can save them to a variable.

// old one
function add(num1, num2){
    console.log(num1  + num2); 
 }
 
 add(2,3);
 
 // new one.
 let sum = function(x,y){
     console.log(x + y);
 };
 
 sum(4,5);
 
 // lets do this with arrow functions.
 
 const addition = (x,y) => {
     console.log(x+y);
 }
 
 addition(5,10);
