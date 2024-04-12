const arr = [10,20,'i am learning js'];
arr.push(30,40,30,50);
console.log(arr);
console.log("checking");
arr.pop();
console.log(arr);

console.log(arr[2].split(" ",3));
console.log(arr.join("_"));

arr.forEach((a)=>{console.log(a*2)});
arr.forEach((n,i,arr)=>{console.log(n*2, i, arr)});

arr.filter((n)=>{console.log(n+2)});

arr.filter((n)=>(n%2==0)).map(n=>{console.log(n*2)});

arr.some((n)=>{console.log(n+2)});

console.log(arr.indexOf(30));
console.log(arr.lastIndexOf(30));