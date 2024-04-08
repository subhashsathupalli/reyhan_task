let sentence = "i am learning js";
let word = sentence.split('');
let char=[];
let j=0;
for(let i=word.length-1;i>=0;i--)
{
    char[j]= word[i];
    j++;
    
}
console.log(char);
let rev_string = '';
for (let i = 0; i < char.length; i++)
{
        rev_string += char[i];
}
console.log(rev_string);
/*
we can simply reverse a given string by applying array methods. 
let reverse = sentence.split('').reverse().join('');
console.log(reverse);
 */


