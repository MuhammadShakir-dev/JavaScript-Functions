// This is the example of function scoped.

let bird = "Maccaow";

function birdName(){
 let bird = "sparow";
 console.log(bird);
}

console.log(bird); // maccaow.
birdName(); // sparrow
// here we don't see an error even we redeclear bird and assign a new value to it
// because they are in different scope that why we don't get an error. 

function laptop(){
    let myLaptop = "Lenovo T470s";
}
console.log(myLaptop) // myLaptop is not defined.


// Now let's have a look on block scoped.
// let and const are braces scoped.

let num = 8;
if(num  > 0){
    let PI  = 3.142;
    let msg = "Heloo you have made it";
}

console.log(num); // 8
console.log(PI); // Error PI is not defined

// we get error because PI and msg are braces scoped and we cannot acces them out side  the braces.

let num = 8;
if(num  > 0){
    var PI  = 3.142;
    let msg = "Heloo you have made it";
};

console.log(PI); // 3.142 because var is not braces scoped they are function scoped.  


// lexical scope.
/*
super simple example of lexical scope is that if we have declears some variable inside of our outer func and you can say in our parent func our child funcs can access it very easily. But if we have something decleared in our child funs our parent funcs would not acces them. this is called lexical scoped.    
*/

function marvel () {
    let heros = ["SUPER MAN" , "BATMAN", "SPIDER MAN", "GREEN LANTIN", "WONDER WOMEN"];
    function callForHelp(){
        for(let i = 0 ; i < heros.length; i++){
            console.log(`Help us : ${heros[i]}`);
        };
    };
    
    callForHelp();
};

marvel();
