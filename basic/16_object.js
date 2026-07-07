

let a=Symbol("hello");
let user={
    name:"Ashirbad",
    Email:"ashirbadmohanty999@gmail.com",
    age:22,
    gender:"male",
    isLoggedIn:true,
    [a]:"hello"

}

console.log(user.name);
console.log(user["name"]);//    it is more appropriate
console.log(typeof user[a]);  
