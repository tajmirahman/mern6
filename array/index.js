
////////////////    Use of at() Array ///////////////////
/*
// const fruits= ['banana','orange','mango','apple'];
const fruits= ['0','1','2','3'];
let fruit= fruits[2];

// console.log(fruit);
*/
///////////////////       use of concat() array           ///////////////
/*
const arr1=['namdm','asif'];
const arr2= ['rubel','hassan'];

let include= arr1.concat(arr2);


const arr1=['0','1'];
const arr2= ['2','3'];
const arr3= ['4','5']

let include= arr1.concat(arr2,arr3);

console.log(include);

*/

///////////////////          use of array().form      /////////////
/*
 
let Title="i love my self";
let TitleArray=Array.from(Title);

console.log(TitleArray);


//use of split('')/split(' ')

let string = "i fell in love with java script language";
console.log(string.split(""))
*/

///////////////////     Array.from use     ////////////////
/*
let text = "ABCDEFG"
const myArr = Array.from(text);

console.log(myArr);

let title = "ABCDEFG"
const myArrTitle = Array.from(title);

console.log(myArrTitle[4]);
*/

///////////////////     .filter use of array     ////////////////
/*

var number=[20,25,35,45,80,55,75,65,95];

var itemNum= number.filter(function(item){

    return item<=40;

});

console.log(itemNum)
*/



///////////////////     .find && findIndex use of array     ////////////////

/*
var number=[1,20,25,35,45,80,55,75,65,95];

var itemNum= number.find(function(item){

    return item<50;

});

console.log(itemNum)


var number=[20,25,35,45,80,55,75,65,95];

var itemNum= number.findIndex(function(item){

    return item>80;

});

console.log(itemNum)
*/


///////////////////     forEach use of array     ////////////////
/*
var number=[20,25,35,45,80,55,75,65,95];

number.forEach(function(item){

    console.log(item)

});
*/

///////////////////     include and indexOf use of array     ////////////////
/*
var number=[20,25,35,45,80,55,75,65,95];

    var result= number.includes(50);

    // console.log(result);



    var number=[20,25,35,45,80,55,75,65,95];

    var result= number.indexOf(80);

    console.log(result);

*/

///////////////////     push,pop and reverse use of array     ////////////////
/*
let number= [20,30,40,50]

number.reverse()
// number.pop()
// number.push(60)

console.log(number)
*/

///////////////////     sort and slice use of array     ////////////////

/*
let number= [80,30,20,50,35,70]

// number.sort()
// number.sort().reverse()

let result=number.slice(2,5)
console.log(result);
*/

///////////////////     splice use of array     ////////////////

/*
let number= [80,30,20,50,35,70]


// remove
//  number.splice(5,1)

// add without romove
number.splice(3,0,21)

// with romove then add or replace  here 50 replace 21
number.splice(3,1,21)

 console.log(number);

 */

 ///////////////////     splice use of array     ////////////////


 var num= 7.24;
 var result= Number.parseInt(num);
 console.log(result);
