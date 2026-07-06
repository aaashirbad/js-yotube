let d = new Date();
console.log(d);
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(typeof(d));


let anotherDate=new Date(2026,0,22);
console.log(anotherDate.toLocaleDateString());
console.log(anotherDate.toLocaleString());
console.log(anotherDate.toDateString());
let x=new Date(2026,7,22,20,17);
console.log(x.toLocaleString());


console.log(x.getDay());
console.log(x.getMonth()+1);
