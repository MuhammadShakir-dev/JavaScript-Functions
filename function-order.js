// hitgher order functions
// funtion that accepts other functions as a arrgumengts or as a retunr value called higher order functions.

const callTwice = (func) => {
    func();
    func();
}

const msg = () =>{
    console.log("HhAHAHAHAH");
    console.log("Hello who is laughhing ..........?");
}

callTwice(msg);


// lets do another exmaple of this.

const rollDie  = ()  => {
    let RollDie = Math.floor(Math.random() * 10) + 1;
    console.log(RollDie);
};

const tenTimes = (f) => {
    for(let i = 0;  i <= 10; i++){
        f();
    };
};

callTwice(rollDie);
