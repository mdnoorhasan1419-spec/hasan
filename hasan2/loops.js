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
//nexted loop
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