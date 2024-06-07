#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import {differenceInSeconds} from "date-fns"

console.log("=".repeat(90))
console.log(chalk.italic.bgMagentaBright("\t WELCOME-TO-CODE-WITH-TOOBA\n\t"))
console.log(chalk.italic.magentaBright("\t COUNT--DOWN--TIMER\t") )
console.log("=".repeat(90))

const response=await inquirer.prompt(
  {
     name:"userInput",
     type:"number",
     message:"Enter your time limit",
     validate:(input)=>{
        if(isNaN(input)){
            return "Enter valid number"
        }
         else if(input>60){
            return "Number must be atmost 60"
        } 
        else{
            return true
        }
      }
    }  
)
let input=response.userInput

function startTime(val:number){
    let initTime=new Date().setSeconds(new Date().getSeconds()+val);
    let intervalTime=new Date(initTime);
    setInterval((()=>{
    let currentTime=new Date()
    let timeDiff=differenceInSeconds(intervalTime,currentTime)
    if(timeDiff<=0){
      console.log("Time out");
      process.exit()
    }
    const min=Math.floor((timeDiff%(3600*24))/3600)
    const sec=Math.floor(timeDiff%60)
    console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
    
 }),1000)

}
startTime(input)