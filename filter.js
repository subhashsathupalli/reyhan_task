let arr = ['male','male','female','male','female'];
let arr1= [];
let arr2=[];
arr.filter((n)=>{
    if(n==='male')
    arr1.push(n);
})
console.log(arr1);

arr.filter((n)=>{
    if(n==='female')
    arr2.push(n);
})
console.log(arr2);