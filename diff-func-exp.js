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

