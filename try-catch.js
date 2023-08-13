// try and catch.
// try and catch usuallly used with handlying error and exception in JavaScript.
// Usualy they are catching errors and stoping them form breaking the code and stoping the execution the code.

// lets do this.

try{
    console.log(a);
} catch {
    
    console.log("Opps a is not defined");
}


function msg(str){
    try{
        console.log(str.toUpperCase().repeat(4));
    } catch {
        console.log("ERROR : Next time please input string not a number")
    }
}

msg(123322323);
