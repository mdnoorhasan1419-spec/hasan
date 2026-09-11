//JavaScript String Methods
//Method	                  Example
//length=         	    "Hasan".length → 5
//toUpperCase()=        "hasan".toUpperCase() → "HASAN"
//toLowerCase()=        "HASAN".toLowerCase() → "hasan"
//charAt()=             "Hasan".charAt(1) → "a"
//includes()=           "Hello".includes("ell") → true
//startsWith()=         "Hello".startsWith("He") → true
//endsWith()            "Hello".endsWith("lo") → true
//indexOf()             "Hello".indexOf("l") → 2
//slice()               "Hello".slice(1,4) → "ell"
//substring()           "Hello".substring(1,4) → "ell"
//replace()             "Hello".replace("H","Y") → "Yello"
//trim()                " Hasan ".trim() → "Hasan"
//split()               "A,B,C".split(",") → `["A","B","C"]
//concat()              "Hello".concat(" Hasan"
//repeat()              "Hi ".repeat(3)
//at()                  "Hasan".at(2) → "s"


let name = "Md-Noor-Hasan";

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.includes("alam"));
console.log(name.charAt(3));
console.log(name.slice(3, 7));
//onsole.log(name.concat("alam"));

// console.log(name.repeat(4));
const nam = "alam";
const roll = 61;
console.log(`my name is ${nam} and my roll no ${roll}`);
