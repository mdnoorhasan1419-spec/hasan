//Method	                  	Example
//toString()=            (123).toString() ->"123"
//toFixed()=             (12.567).toFixed(2) ->"12.57"
//toPrecision()=         (12.567).toPrecision(4) ->"12.57"
//Number.isInteger()=     Number.isInteger(10) ->true
//Number.isNaN()=         Number.isNaN(NaN) ->true
//Number.isFinite()=      Number.isFinite(10) ->true
//parseInt()=             parseInt("25") ->25
//parseFloat()=           parseFloat("12.5") ->12.5
 const alam= new Number(12.539)
 console.log( alam.toString());
 console.log( alam.toString().length);


console.log(Number.isInteger(10));
// console.log(Number.isInteger(10));    // true
// console.log(Number.isInteger(10.5));  // false
// console.log(Number.isInteger(0));     // true
// console.log(Number.isInteger(-5));    // true

 console.log( alam.toFixed(2));
 console.log( alam.toPrecision(4));









//++++++++++++++++++++++++===+++++++++++++++++++++++++++++++++

//Method	                   	Example
//Math.round()=             Math.round(4.6) ->5
//Math.floor()=             Math.floor(4.9) ->4
//Math.ceil()=              Math.ceil(4.1) ->5
//Math.trunc()=             Math.trunc(4.9) ->4
//Math.abs()=               Math.abs(-10) ->10
//Math.max()=               Math.max(10,20,5) ->20
//Math.min()=               Math.min(10,20,5) ->5
//Math.pow()=               Math.pow(2,3) ->8
//Math.sqrt()=              Math.sqrt(25) ->5
//Math.random()=            Math.random() -> 0–<1


const hh= Math.round(4.5); // 5
const nn=Math.floor(4.9); // 4
const oo=Math.ceil(4.1);  // 5
const aa=Math.trunc(4.9); // 4
const rr=Math.abs(-20);   // 20
console.table(hh);
console.table(nn);
console.table(oo);
console.table(aa);
console.table(rr);

let num = Math.floor(Math.random() * 10) +1;

console.log(num);
console.log(Math.random());
