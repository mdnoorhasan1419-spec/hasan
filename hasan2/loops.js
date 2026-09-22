// Loop / Keyword           Kaam                                      Example

// for loop                 Fixed number of times repeat karta hai    for(let i=0; i<5; i++)
// while loop               Jab tak condition true ho, chalta hai     while(i < 5)
// do...while               Pehle ek baar code chalata hai             do {...} while(i < 5)
// for...of                 Array/string ki values deta hai            for(let x of arr)
// for...in                 Object ki keys/index deta hai              for(let x in user)
// break                    Loop ko turant stop karta hai              if(i == 3) break;
// continue                 Current iteration skip karta hai            if(i == 3) continue;

for (let i = 0; i <=10; i++) {
    const element = i;
    if (element==5) {
        console.log(`5 is best number in the foor loop`);
        
    }
    console.log(element);
    
}
//nexted loop.................
for (let i = 0; i <=10; i++) {
    console.log(`outer loop number:${i}`);
    for(let j=0;j<=10;j++){
    //console.log(`inner loop number is ${j} and outer loop number is ${i}`);
    console.log(i+`*`+j+`=`+i*j);
    
    }
}
 



// let i = 1;

// while (i <= 5) {
//     // console.log(i);
//     i++;
// }
//  console.log(i);

// const array=["hasan","noor","alam"]
// for (let  i = 0;  i < array.length;  i++) {
//     const element = array[ i];
//     console.log(element);
// }

// for (let i = 0; i <=10; i++) {
//      if (i==5) {
//         console.log(`5  is berst number in the loops`);
//         break
        
//      }
//     console.log(i);
    
// };

// for (let i = 1; i <=15; i++) {
//     if (i==10) {
//         console.log(`10 is best number in the loops`);
//         continue
//     }
//     console.log(i);
    
// }


// let i=1;
// while (i<=7) {
//     console.log(`value of ${i}`);
//     i++
// }
//array of loop.............
// const array=["hasan","alam","noor"]
// let i=2;
// while (i<array.length) {
//     console.log(`value is ${array[i]}`);
//     i++
    
// }
//do while loop...........
// let j=1
// do {
//      console.log(j);
//          j++
//     // if (j==6) {
//     //     console.log(`value is best`);
        
//     // }
// } while (j<=12);

//forof loop array............
const arr=[1,2,3,4,5,]
for (const hh of arr) {
    console.log(hh);
    
}

//forof loop string............
const str="hasan alam"
for (const nn of str) {
    console.log(`your name is ${nn}`);
    
}

//for in loop object.............
const object={
    name:"hasan",
    rollno:209,
    email:"hasan1234@gmail.com"
}
for (const key in object) {
    console.log(object[key]);
}
//for in loop array...........
const arr1=["hasan","noor","alma","asif","amjad"]
for (const key in arr1) {
   console.log(arr1[key]); 
}

//foreach loop array............
const arr2=["hasan","alam","noor","ajhar","afzal"]
arr2.forEach(function (ns){
    console.log(ns);
    
})
//array object.........
const arrobj=[
    {
        name:"hasan",
        email:"hasan9876@gmail.com"
    },
     {
        name:"noor alam",
        email:"noor9876@gmail.com"
    },
     {
        name:"afzal",
        email:"afzal9876@gmail.com"
    }
]
arrobj.forEach((ss)=>{
    console.log(ss.email);
    
})