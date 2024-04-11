//promises
const prompt = require("prompt-sync")({sigint:true});
const evenOdd= new Promise(function(resolve,reject)
{
    let x= prompt("enter any integer for even or odd check");
    if(x%2 === 0)
        resolve(x);
    else
        reject(x);
})  

const prime= new Promise((resolve,reject)=>
{
    let num= prompt("enter value greater than 2 to check prime");
    let i, flag = 0;
    for (i = 2; i <= num - 1; i++) 
    {
        if (num % i == 0)
        {
            flag++;
            break;
        }
    }
    if (flag == 0)
        resolve(num);
    else
        reject(num);
})
evenOdd.then((x)=> {console.log(`${x} is even number`);})
.catch((x)=>{console.log(`${x} is odd number`);});

prime.then((num)=>console.log(`${num} is prime number`))
.catch((num)=>{`{num} is not prime`});