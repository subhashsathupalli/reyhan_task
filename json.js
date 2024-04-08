const country='{"name" : "india","continent" : "asia","people": "1.4b"}'

let val= JSON.parse(country);
console.log(val)

let data= JSON.stringify(val);
console.log(data); 