function abc(num1,num2){
    console.log(num1+num2);

}
abc(2,7);


function xyz(num1,num2){
    console.log("hello")
    return num1+num2;
    console.log("hello")//anything after return keyword can't be executed because return keyword will terminate the function execution
}
console.log(xyz(2,7));


function isUserLoggedIn(username){
    if(username===undefined || username===null || username===""){
        console.log("Enter a vaild name:")
        return

    }

    return `${username} is loggedin...`
}
let v=isUserLoggedIn("Ashirbad");
console.log(v);
let vn=isUserLoggedIn("  ");
console.log(vn);
let b=isUserLoggedIn("");
console.log(b);


function calculatePrice(value1,value2,...price){
    return price;
}
console.log(calculatePrice(100,200,300,400,500));