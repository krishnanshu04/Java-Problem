var frnds = {

    name1 : "Akash",
    name2 : "Aman",
    name3 : "Saif",
    name4 : "Sumit",
    name5 : "Aditya"
};

var a;

// for(a=1; a<6; a++) {
//     console.log(frnds['name'+a]);
// }

//Shortcut method
for(a in frnds){
    console.log(a);
    console.log(frnds[a]);
}