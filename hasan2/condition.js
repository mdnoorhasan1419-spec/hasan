// Syntax / Method          Kaam                                      Example

// if                      Condition true ho to code chalata hai     if (age >= 18)
// if...else               True/false dono cases handle karta hai     if (age >= 18) {...} else {...}
// if...else if...else      Multiple conditions check karta hai        if (marks >= 80) {...}
// Nested if                if ke andar doosra if lagata hai           if (age >= 18) { if (id) {...} }
// Ternary operator         Short if...else likhne ka tarika           age >= 18 ? "Adult" : "Minor"
// Logical AND (&&)         Dono conditions true honi chahiye          age >= 18 && id == true
// Logical OR (||)          Koi ek condition true honi chahiye        age >= 18 || permission
// Logical NOT (!)          Condition ka result ulta karta hai         !isLoggedIn

// const age=5;
// if (age >= 18&&age<=25) {
//     console.log("Adult");
// }
// else if(age >= 25&&age<=65) {
//     console.log("old");
// }
// else if(age >= 65&&age<=95) {
//     console.log("very old");
// } else {
//     console.log("Minor");
// }

const marks=65;
if (marks>= 95&&marks<=100) {
    console.log("grade:A+");
}
else if(marks >=90&&marks<=95) {
    console.log("grade:A");
}
else if(marks >=80&&marks<=90) {
    console.log("grade:B+");
}
else if(marks>=70&&marks<=80) {
    console.log("grade:B");
}
else if(marks>=60&&marks<=70) {
    console.log("grade:C");
} else {
    console.log("fail");
};

const price=6000;
if(price>=5000)console.log("yes");
