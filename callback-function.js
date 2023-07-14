function f0(nm){
    console.log("Hello "+nm);
}


function f1(name,g){

    g(name);
}

//Function passing as an argument is called callback function.
f1("Krishnanshu",f0);

