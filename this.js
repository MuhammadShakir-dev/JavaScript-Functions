// this keyword in JavaScript.
// we use this keyword to access oher properties  in the same object.
// The value of this depends on the invocation context of function it is used in.

// lets practive this by doing some practice quesitons.

let myinfo = {
    name : "Muhammad Shakir",
    age : 22,
    prof : "Front-end Developer",
    uni : "Sindh Madressatul Islam University",
    comm : "Microsoft and GitHub",
    
    bio(){
        return `Hello Folks I ${this.name}. I'm ${this.age} years old and I'm a ${this.prof} and studing in ${this.uni}. I'm also a part of diff tech communities like ${this.comm}`;
    }
};

console.log(myinfo.bio());


// this keyword in JavaScript.
// we use this keyword to access oher properties  in the same object.
// The value of this depends on the invocation context of function it is used in.

// lets practive this by doing some practice quesitons.

let myinfo = {
    name : "Muhammad Shakir",
    age : 22,
    prof : "Front-end Developer",
    uni : "Sindh Madressatul Islam University",
    comm : "Microsoft and GitHub",
    
    bio(){
        return `Hello Folks I ${this.name}. I'm ${this.age} years old and I'm a ${this.prof} and studying in ${this.uni}. I'm also a part of diff tech communities like ${this.comm}`;
    }
};

// note taking point.
// if I store myinfo.bio() in a new variable and the print the value lets see what happens.

let intro  = myinfo.bio;
console.log(intro());

// you will see the whole statment but you will never see the the properties values which i have is refer in the bio function using this keyword.

// beacuse in the intro variale when i store the value of myintro.bio and the execute it using intor(). then myinfo will converted into window object or .bio will considered the myinfo as a window object that why it will show you undefined value.


// practice qesution.

//Define an object called hen.  It should have three properties:
// name should be set to 'Helen'
// eggCount should be set to 0
// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

const hen = {
    name  : "Helen",
    eggCount : 0,
    layAnEgg(){
       this.eggCount += 1 ;
       return 'EGG';
    }
};

console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);



