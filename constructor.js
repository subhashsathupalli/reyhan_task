function Men(name, number)
{
   this.student = name;
   this.id = number * 2;
   this.family = function()
   {
    console.log("we are family");
   }
}
    let men1 = new Men("subbu", 22);
    let men2 = new Men("sathupalli",10);
    let men3 = new Men('hai',28);
console.log(men2);
men2.family();
