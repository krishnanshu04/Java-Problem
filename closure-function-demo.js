//Closure-function, if function don't return another function then for everytime
//we got 1 as increament value bcoz once execution is completed then local variable
//will be destroyed. 
function f1() {

    let count = 0;
    return function increment_count(){ return ++count;};
}

let x = f1();
console.log(x());
console.log(x());
console.log(x());