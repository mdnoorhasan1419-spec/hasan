// Method	              Kaam	                          Example
// push()	    Last me value add karta hai 	      arr.push("Mango")
// pop()	    Last ki value remove karta hai        arr.pop()
// unshift()	Starting me value add karta hai	      arr.unshift("Apple")
// shift()	    Starting ki value remove karta hai    arr.shift()
// includes()	Check karta hai value hai ya nahi	  arr.includes("Mango")
// indexOf()	Value ka index batata hai	          arr.indexOf("Mango")
// slice()	    Array ka ek part nikalta hai	      arr.slice(1, 3)
// splice()	    Value add/remove/change karta hai 	  arr.splice(1, 1)
// join()	    Array ko String me convert karta hai  arr.join(",")
// reverse()	Array ko ulta karta hai	              arr.reverse()
// sort()	    Array ko sort karta hai	              arr.sort()
// concat()	    Do arrays ko jodta hai	              arr1.concat(arr2)


const Array =[0,1,2,3,4,5];
// //const arr2= new Array(1,2,3,4)
// // Array.push(7,8,9);
// // Array.pop();
// // Array.unshift(7);
// // Array.shift();
// // //Array.includes(9);
// console.log(Array.includes(5));
// console.log(Array.indexOf(4));
// // const narray= Array.join()     
// const harray= Array.slice(2, 4)
// const marray= Array.splice(3, 5)
// //console.log(Array);
// console.log(harray);
// console.log(marray);
// //console.log(typeof narray);let arr = [0,1,2,3,4,5,7,8];

 const newArr1 =Array.slice(2, 4);
console.log(newArr1);
console.log(Array);

const newArr = Array.splice(3, 5);
console.log(newArr);
console.log(Array);

const myhero=["md","noor","alam","amjad"]
const myhero1=["mohammad","asif","hasan","ajhar"]
const hero1=myhero.concat(myhero1)
console.log(hero1);

const hero2= [...myhero,...myhero1]
console.log(hero2);



