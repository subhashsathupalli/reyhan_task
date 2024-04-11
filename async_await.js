//async and await without using promises concept
const prompt = require("prompt-sync")({sigint:true});
const basement = ()=>
{
        let response = prompt("enter 1 for proceed and 0 for wait")
        if(response==1)
                return "true";
        else
                return "false";   
}
const pillar= () =>
{
        let response = prompt("enter 1 for proceed and 0 for wait")
        if(response==1)
                return "true";
        else
                return "false"; 
}
const beam= ()=>
{
        let response = prompt("enter 1 for proceed and 0 for wait")
        if(response==1)
                return "true";
        else
                return "false"; 
}

const consruction =async () =>
{
   let basementResponse= await basement();
        if(basementResponse=="true")
        {
         let  pillarResponse= await pillar();
                if(pillarResponse=="true")
                 {
                        let beamResponse= await beam();
                        if(beamResponse=="true")
                        {
                                console.log("we are ready to proceed to slab");
                        }
                        else{
                                console.log("beams not completed")
                        }
                 }
                 else{
                        console.log("columns not completed")
                 }
        }
        else{
                console.log("base not completed")
        }
}
consruction();