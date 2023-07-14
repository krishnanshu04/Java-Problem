let arr = [10,20,30,40,50,60,70,80,90];

//spread operator
b = [...arr];

console.log(b);

const add = (a,b,c,d) => a+b+c+d;

//spread operator
console.log(add(...arr));


let [x,y,z,...restElementAfterFirstTwo] = arr;

console.log(restElementAfterFirstTwo);