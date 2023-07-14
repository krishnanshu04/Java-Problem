var arr = []; 
// console.log(typeof(arr));

arr[0]="Golu";
arr.push("Bholu");
arr.push("Molu");
arr.push("Behan");

var str = arr.toString();

console.log(arr.length);

console.log(str);

var g = "Laurence,Mike,David,,,,,,,,New";
var h = g.split(",");


var arr1 = ["A","B","C","D","E","F","G","H","I","J"];

var arr3 = arr.concat(arr1);

arr3=arr.join(",");

arr3 = arr1.slice(1,5);
arr3.reverse();
arr.sort();
