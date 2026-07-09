const numbers=[1,2,3,4,5,6,7];
for(  let number of numbers){
    console.log(number)
}
for(let r in numbers){
    console.log(numbers[r])
}
// const arr=["Ashirbad","majnq","hdn"];
const arr="Ashirbad"
for(let str of arr){
    console.log(str);
}


const map=new Map();
map.set('IN',"INDIA");
map.set('usa',"united staxte of america");
map.set('IN',"INDIA");
map.set('fr',"france");
// console.log(map)


for(let [n,m] of map){
    console.log(n);
    console.log(m);
}


let my={
    name:"Ashirbad",
    reg:35,
    sec:'a',
    cgpa:8.9

}
for(let [vals,c] in my){
    console.log(my[vals,c])
}






