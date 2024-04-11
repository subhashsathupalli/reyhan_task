//nested callback

function sleep(myCallback)
{
    console.log("sleeping");
    myCallback();
}

function read(myCallback)
{
    console.log("reading completed");
    myCallback();
}

function eat(myCallback)
{
    console.log("eating completed");
    myCallback();
}

eat(function(){read(function(){sleep(function(){})})})

// eat(function(){
//     console.log("First callback");
//     read(function(){
//       console.log("Second callback!")
//       sleep(function(){
//         console.log("Third callback!");
//     })
//   })
// })
