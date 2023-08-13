// methods in JavaScript.
// we can add functions to properties as there values we can call them methods.
// every function is a method but not every function is a method.
// methods are function which is assgned to a particular properties inside of an object.

const cal = {
    add : function(x,y){
        return x + y;
    },
    sub : function(a,b){
        return a - b;
    },
    mul : function(c,d){
        return c * d;
    },
    div : function(e,f){
        return e / f;
    }
}

console.log(cal.add(11,3));
console.log(cal.sub(11,3));
console.log(cal.mul(11,3));
console.log(cal.div(11,3));


// there is also a shorthand property of doing this in JavaScript.

const calculation = {
    add(x,y){
        return x + y;
    },
    sub(x,y){
        return x - y;
    },
    mul(x,y){
        return x * y;
    },
    div(x,y){
        return x / y;
    },
    sqrt(x){
        return Math.sqrt(x); 
    }
};

console.log(calculation.add(12,3));
console.log(calculation.sub(12,3));
console.log(calculation.mul(12,3));
console.log(calculation.div(12,3));
console.log(calculation.sqrt(144));

// another example.

const square = {
    area(num){
        return num*num;
    },
    
    perimeter(num){
        return num*4;
    }
}


console.log(square.area(100));
console.log(square.perimeter(10));
