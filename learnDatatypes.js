// Examples on the different types of data in javascript

// number 
var num1 = 8;
console.log(num1);

// variable storing string 
var strName="My name is Nikhil";
console.log("A string: "+ strName);

// boolean
var bool = true;
console.log("Boolean value is: "+bool);

// undefined
var object
console.log("Variable is not assigned any value so: "+ object);

// null
object = null;
console.log("Variable is nothing or empty when : "+ object)

// array 
var arrNum = []; // empty array
console.log(arrNum);

arrNum = [1,299,3,4,5,6,99,325]
console.log(arrNum);

/* output of this is:
(8)[1,2,3,4,5,6,99,325]
0:1  // index 0
1:299  // index 1 : value of index is 299
2:3
3:4
4:5
5:6
6:99
7:325 // index 7 : value of index is 325
*/

console.log("Array element 2 is given as arrNum[1]"+arrNum[1]);
console.log("Array element 7 is given as arrNum[6]"+arrNum[6]);  

length = arrNum.length // total number of elements
console.log(length)

lastIndexOfArr = arrNum.length-1
console.log(lastIndexOfArr)

var arrColor = ["red","green","blue"];
console.log(arrColor[1]);
console.log(arrColor[2]);

var arrMix = [num1, "testing",strName,bool]
console.log("Intial arrMix array" + arrMix);

// add a value to an array
arrMix.push("Inserting");
console.log(arrMix);

// remove a value to an array from last
arrMix.pop();
console.log(arrMix);

// length of an array
console.log(arrMix.length)

// Nested array / multidimensional arrays  , you have to write the arr1[MainIndex][subIndex]
arr1= [[1,2],[2,3],[3,4],[4,5]];
console.log(arr1);

console.log(arr1[1][0]);

console.log(arr1[2][1]);

//trajectory = [[x,y],[x1,y1],[x2,y2]];


