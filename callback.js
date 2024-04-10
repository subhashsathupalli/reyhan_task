const prompt = require("prompt-sync")({sigint:true});
//callback and settimeout
function data()
{
    console.log("successfully executed after settimeout");
}

function print(output)
{
    console.log('the output: ', +output);
    setTimeout(data,2000);
    console.log("because of settimeout im executing 1st")
};

function main(a,b,myCallback)
{
    let z= a+b;
    myCallback(z);
}
let x= parseInt(prompt("enter any integer\t"));
let y= parseInt(prompt("enter 2nd integer\t"));
main(x,y,print);
console.log("because of settimeout im executing 2nd")

