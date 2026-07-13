// const numbers=[1,2,3,4,5,6,7];
// for(  let number of numbers){
//     console.log(number)
// }
// for(let r in numbers){
//     console.log(numbers[r])
// }
// const arr=["Ashirbad","majnq","hdn"];
// const arr="Ashirbad"
// for(let str of arr){
//     console.log(str);
// }


const map=new Map();
map.set('IN',"INDIA");
map.set('usa',"united staxte of america");
map.set('IN',"INDIA");
map.set('fr',"france");
// console.log(map);


// for(let something of map){
//     console.log(something)
// }
//[ 'IN', 'INDIA' ][ 'usa', 'united staxte of america' ][ 'fr', 'france' ]

for(let [something,some] of map){
    console.log(something,some)
}




// for(let [n,m] of map){
//     console.log(n);
//     console.log(m);
// }


let my={
    name:"Ashirbad",
    reg:35,
    sec:'a',
    cgpa:8.9

}
// for(let [vals,c] in my){
//     console.log(my[vals,c])

// }
for(let num in my){
    console.log(my[num]);
    console.log(num);

}

let game={
    'game1':"cricket",
    'game2':"football",
    'game3':"hocky"
}
for ( let arr in game)
{
    console.log(arr);
    console.log(game[arr])
}

const programming=[
    "java",
    "python",
  "javaScript",
"mongo",
    "database"
]

for( let count in programming){
    console.log(count);
}
for( let count in programming){
    console.log(programming[count]);
}

let abc=["hg",2,6,5,"gg"]
abc.forEach (function (val,index,arr){
    console.log(val,index,arr)
// abc.forEach (function (val,arr,index){
//     console.log(val,arr,index)       it doesnot matter how u call always 1st value,2nd index,then array
})
// let abc=["hg",2,6,5,"gg"]
// abc.forEach((val)=>{
//     console.log(val)
// })





