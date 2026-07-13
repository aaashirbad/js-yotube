// const arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val)
// })
// o/p:1
// 2
// 3
// 4
// 5

// const arr=[1,2,3,4,5];
// let y=arr.forEach((val)=>{
    
    
//     console.log(val);
//     return val;
// })
// console.log(y);//undefined bcz forEach can't return




    // const number=[1,2,3,4,5];
    // let v=number.filter((val)=> val>2 )
    // console.log(v);

    // const number1=[11,22,33,44,55];
    // let c1=number1.filter((val)=>{
    //     return val>24

    // } )
    // console.log(c1)


    let abc=[{book:"one",sub:"eng",publish:1983,eddition:2016},
        {book:"two",sub:"math",publish:1987,eddition:2025},
        {book:"three",sub:"history",publish:1983,eddition:2026},
        {book:"four",sub:"eng",publish:1982,eddition:2026},
        {book:"five",sub:"odia",publish:2002,eddition:2026}
        
    ]
    let z=abc.filter((val)=>{return val.sub==="eng"

    })
    console.log(z)
    let u=abc.filter((val)=>val.publish==1983)
    console.log(u)

    let zz=abc.filter((val)=>val.sub==="eng"||val.eddition==2026)
    console.log(zz)


    const one=[1,2,3,3,2,1];
    let xx=one.map((val)=>val+100)
    console.log(xx)
    const onee=[1,2,3,3,2,1];
    let aa=onee.map((val)=>{return val*2})
    console.log(aa)


    const m=[10,20,30,40,50,60,70];
    let n=m.map((val)=>val*2)
    .map((val)=>val*10)
    .filter((val)=>val>1000)
    console.log(n)


    const w=[1,2,3];
    let o=w.reduce((acc,currVal)=>acc+currVal ,0)
        // console.log(`acc val=${acc} and currentvalue=${currVal}`)

    console.log(o)
    // const w=[1,2,3];
    // let o=w.reduce((acc,currVal)=>{
    //     console.log(`acc val=${acc} and currentvalue=${currVal}`)
    //     return acc+currVal;
    // },0)
    // console.log(o)
    // const w=[1,2,3];
    // let o=w.reduce(function(acc,currVal){
    //     console.log(`acc val=${acc} and currentvalue=${currVal}`)
    //     return acc+currVal;
    // },0)
    // console.log(o)


    const course=[
        {name:"web development",
         price:3500
        },
        {
            name:"data science",
            price:6500
        },
        {
            name:"cyber security",
            price:9999
        }
    ]
    let i =course.reduce((acc,val)=>{
        return acc+val.price},0)
    
    // course.reduce((acc, val) => acc + val.price, 0);
    console.log(i)