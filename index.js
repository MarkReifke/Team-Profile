const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const prompts = require("./src/prompts");

const employees = [];

inquirer
    .prompt([
        {
            name:"employee",
            message: "What employee would you like to add?",
            type:"list",
            choices: ["Engineer", "Intern", "Finished"],
        },
    ])
    .then(function (employee) {
        console.log(response);
        switch(employee){
            case "Engineer":
            break;
            case "Intern":
            break;
            case "Finished":
            break;
        }
    });    
