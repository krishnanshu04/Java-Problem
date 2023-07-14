let player1 = {

    "name":"Kohli",
    "country":"India",
    "run":12000

    
};

let player2 = {

    "name":"ABD",
    "country":"South Africa",
    "run":10000

    
};

display = function(matches){
    return this.name +" belongs to "+this.country+" and scores "+this.run+" run in "+matches+" odi matches";
}

//Call Method Demo
console.log(display.call(player1,250));

//Apply Method Demo
console.log(display.apply(player2,[300]));

//Bind Demo
let x = display.bind(player1,250);
console.log(x());
