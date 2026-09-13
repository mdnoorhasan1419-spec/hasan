// Method	                 Kaam                               Example
// Object.keys()	   Saari keys deta hai	                 Object.keys(user)
// Object.values()	   Saari values deta hai	             Object.values(user)
// Object.entries()    Key + value dono deta hai	         Object.entries(user)
// Object.assign()	   Objects ko copy/merge karta hai	     Object.assign({}, user)
// Object.hasOwn()	   Check karta hai key exist karti hai   Object.hasOwn(user, "age")
// Object.freeze()	   Object ko change hone se rokta hai	 Object.freeze(user)
// Object.seal()	   Property add/delete rokta hai	     Object.seal(user)
// Object.create()	   Naya object create karta hai	         Object.create(user)

const user = {
    name: "Hasan",
    class: "computing of application",
    email: "noorhasan78900@gmail.com",
    village: "darbhanga",
    contact: 9939097754,
    age: 20,
    roll: 10
};
console.log(user.email);
console.log(user ["email"]);
 console.log(user);
user.email = "hasan123456@gmail.com"
 //Object.freeze(user)
user.email= "noorhasan78900@gmail.com"
console.log(user);



