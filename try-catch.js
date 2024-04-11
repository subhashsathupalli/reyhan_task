const prompt = require("prompt-sync")({sigint:true});
const exception = (a,b)=>
{
try
    {
        if(b==0)
        throw "shouldn't divided by 0";
    }
    catch(error)
    {
        console.log(error)
    }
    finally
    {
        if(b != 0)
        {
            let z= a%b;
            console.log(`remainder is ${z}`);
        }
    }
}

let val1 = prompt("enter 1st positive ineger");
let val2 = prompt("enter 2nd positive ineger");
exception(val1,val2);
