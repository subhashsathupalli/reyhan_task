/*biggest integer using
 nested ternary operator and arrow function */
 
const prompt = require("prompt-sync")({sigint:true});

const output = (x,y,z)=>
{
// if(x<y && z<y) console.log(y);
// else if(x>y && x>z) console.log(x);
// else console.log(z);
let result= x<y && z<y ? y : x>y && x>z ? x : z;
console.log(result);
}
let x= parseInt(prompt("enter x value\n"));
let y= parseInt(prompt("enter y value\n"));
let z= parseInt(prompt("enter z value\n"));
output(x,y,z);


