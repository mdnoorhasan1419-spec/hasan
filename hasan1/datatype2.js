// stack (primitive);  heap(non primitive)
//primitive datatype....."Copy by Value"
//string= "hasan" "hello"
//Numbber= 1234, 3.456
//boolean= true or false
//undefined= let x;
//Null=y let y=null;
//biglnt=263728389736547n
let myyoutubeNme="nnelectrichobbe"
let anotherName=myyoutubeNme
anotherName="NNexpainhub"
console.log(myyoutubeNme);
console.log(anotherName);

//non primitive datatype...."Copy by Reference" 
//Object: { name: "Hasan", age: 25 }
//Array: ["apple", "banana"]
//Function: (Callable Object)

let hasan1 = {
    Email:"hasan@gmail.com",
    upi:"noor@sbbi"
}
let hasan2=hasan1
hasan2.Email="noor@gmail.com"
console.log(hasan1.Email);
console.log(hasan2.Email);

