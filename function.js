function myfunction(a){

    console.log(a);
}

myfunction("hello world");

var frnds = ["Srijan","Chotu","Akash","Saif","Subhagaya","Rahul","Aman"];

function toArray(array,addNew){

    array.unshift(addNew);
    console.log(array);
}

toArray(frnds,"Aditya");

//Self-Execution function
(function(){

    var b = "Krishnanshu";
    console.log(b);
});



function f1(){
    var x = document.getElementById("101");

    // window.alert(x.textContent);
    
    x.textContent="Hello India";
    
    // x.style.visibility="hidden";
    
    x.style.color="blue";
    
    x.style.fontSize="40px";
}

 //If we declared the variable without any var or let keyword even inside the function also it would behave like global variable.
 
 var a = 100;

 function f2(){

    var x = 201;
    y=220;
    console.log(a);
    console.log(x);
 }

 console.log("a="+a);

//  console.log(x);
 f2();
 console.log("y="+y);

 {
    c=500;
    console.log("C inside block : "+c);
 }

 console.log("C outside the block : "+c);

 //In JS function is used to create an objects.
 //In JS we can define function inside function.

 //Before the ES6
 function Car(name,color){
    this.name=name;
    this.color=color;

    this.display = function(){
        return "["+this.name+" , "+this.color+"]";
    }
 };

 car1 = new Car("Tata altroz","dark edition");
//  console.log(car1.name+" has "+car1.color+" in color");

console.log(car1.display());



//After the ES6
add = (x,y) => console.log(x+y);
add(4,5);