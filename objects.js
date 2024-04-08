let car = {
    name : 'tata',
    model : 'sulthan',
    year : 2024
}

let bike = {
    engine_model: 'bulk'
}

car= {...car,...bike};
console.log(car);

console.log(car.name);
car.power = 250;
 console.log(car);

delete car.power;
console.log(car);

for(let val in car)
{
    console.log(val, car[val]);
}

console.log(Object.entries(car));

for(let [key,value] of Object.entries(car))
{
    console.log(`key = ${key}, value= ${value}`);
}
Object.freeze(car);
car.model = "monster";
console.log(car.model);
