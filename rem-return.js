// we ca do another thing with arrow funcitons is that we can implicat then by not using return keyword. this is usefull in some cases and we can only do this with arrow functions only.


let classSE = [
    {
        name : "Muhammad Shakir",
        id : 77
    },
    
    {
        name : "Muhammad Haris",
        id : 69
    },
    
    {
      name : "Anum Mustafa",
      id : 31
    },
    
    {
      name : "Shiza Junaid",
      id : 107
    }
];

// let stdNames = classSE.map((value) => {value.name});
// let stdId = classSE.map((value) => {value.id});

// console.log(stdNames); // udenfined
// console.log(stdId); // udenfined.

// the reason why it is showing you udefined because to eleminate return keyword from arrrow function there is a new syntax for doing this.

let stdNames = classSE.map((value) => (value.name));
let stdId = classSE.map((value) => (value.id));

console.log(stdNames); 
console.log(stdId); 

// function styling in JavaScript.

function add (x,y){ // regular funciton expression.
    return x + y; 
}

let sub = (x,y) => { // arrow func with parens around param.
    return x - y;
}

let sqrt = x => { // arrow func with no parens aound param.
    return Math.sqrt(x);
}

let cbrt = x => ( // implicit return.
        Math.cbrt(x)
    )

let isEven  = x => (x % 2 === 0); // one liner implicit return 

console.log(add(11,2));
console.log(sub(11,2));
console.log(sqrt(144));
console.log(cbrt(27));
console.log(isEven(4));

// implicit returns only work in a situation where there is one value very clearly, just a single expression
// to be evaluated and returned.
