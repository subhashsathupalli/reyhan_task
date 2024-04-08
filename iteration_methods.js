let arr= [10,12,'subbu',-20,"js"];

arr.forEach(value =>
{
     console.log(value += 10);
})
console.log(arr);

console.log(arr.map(value =>
{
    return value += 10;
}))
console.log(arr);

console.log(arr.filter(value =>
{
    if(value % 1 === 0)
    {
        return value;
    }
}))

const data= arr.some(value =>
{
    return value%1 != 0;
})
console.log(data);