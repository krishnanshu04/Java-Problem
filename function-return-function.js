function englishHello(nm) {
  console.log("Hello " + nm);
}

function frenchHello(nm) {
  console.log("Bonjour " + nm);
}

//Function returning function.
function greeting(name, g) {
  return g(name);
}

greeting("ruchika", frenchHello);

function f1() {
  return function f2() {
    return 5;
  };
}

let x = f1();
console.log(x());
