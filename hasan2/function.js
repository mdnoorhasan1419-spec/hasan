// Method                  Kaam                                      Example

// Function.call()         this set karke function call karta hai    fn.call(user, 20)
// Function.apply()        this set + arguments array me deta hai    fn.apply(user, [20])
// Function.bind()         New function banata hai                  fn.bind(user)
// Function.toString()     Function ko string me convert karta hai  fn.toString()
// Callback Function       Function ko argument ke roop me deta hai  arr.forEach(fn)
// Higher-Order Function   Function ko accept/return karta hai      function outer(fn)
// Arrow Function          Short function syntax                    const add = (a,b) => a+b
// Default Parameter       Default value set karta hai               function add(a=10)
// Rest Parameter (...)    Multiple arguments collect karta hai     function add(...nums)
// Recursion               Function khud ko call karta hai           function fact(n){ fact(n-1) }
// IIFE                    Function ko immediately run karta hai     (function(){})()
// Closure                 Outer variable ko remember karta hai     function outer(){ return function(){} }

// function adNumber(num1,num2){
//     console.log("sum:",num1+num2);
    
// }

// adNumber( 14,19)


// function addNumber(num1,num2){
//     let result= num1+num2
//     return result
    
// }

//  const result=addNumber( 14,19)
//  console.log("result=", result);
 
 // Rest Parameter (...)
function culactPrice(...num1){
    return num1
}
console.log(culactPrice(1000,500,100000,600));

const user = {
    name: "hasan",
    price: 100000,
    email: "hasan123456@gmail.com",

}

function finduser(anyobject){
console.log(`user name is ${anyobject.name},and user price is ${anyobject.price},and user email is ${anyobject.email}`);

}
// finduser(user)
const array=[2000,3999,5999,9888]
function newarray(getarray){
    return getarray[3]
}
console.log(newarray(array));

  //nexted function
function one (){
    const username="hasan"
    function two(){
         const website="n.nelectric"
        console.log(username);
        console.log(website);
        
    }
      
      
      two()
}
one()


