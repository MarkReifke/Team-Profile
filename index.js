const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const prompts = require("./src/prompts");

const manager = [];
const employees = [];
const intern = [];

const managerQuestions = [
    {
        type: "input",
        message: "Enter name of manager",
        name: "name"
    }
    {
        type: "input",
        message: "Enter manager Id",
        name: "id"
    }
    {
        type: "input",
        message: "Enter manager email",
        name: "email"
    }
    {
        type: "input",
        message: "Enter manager office number",
        name: "officeNumber"
    }
];
const engineerQuestions = [
    {
        type: "input",
        message: "Enter name of engineer",
        name: "name"
    }
    {
        type: "input",
        message: "Enter engineer Id",
        name: "id"
    }
    {
        type: "input",
        message: "Enter engineer email",
        name: "email"
    }
    {
        type: "input",
        message: "Enter engineer Github",
        name: "github"
    }
];
const internQuestions = [
    {
        type: "input",
        message: "Enter name of intern",
        name: "name"
    }
    {
        type: "input",
        message: "Enter intern Id",
        name: "id"
    }
    {
        type: "input",
        message: "Enter intern email",
        name: "email"
    }
    {
        type: "input",
        message: "Enter intern school attending",
        name: "school"
    }
];
const menu = [
    {
        name:"employee",
        type:"list",
        message: "What employee would you like to add?",
        choices: ["Engineer", "Intern", "Finished"],
    }
]
function init () {
    askQuestion()
}
function askQuestion(){
    prompt(managerQuestions)
    .then(data => {
        manager.push(data)
        return askMenu
    })
}
function askMenu (){
    prompt(menu)
    .then(data => {
        if (data.menu === "Add Engineer"){
            addEngineer()
        }else if(data.menu === "Add Intern"){
            addIntern()
        }else(generatecard)
    
    })
}
function addEngineer(){
    prompt(engineerQuestions)
    .then(data => {
        engineer.push(data)
        console.log(engineer)
        askMenu();
        return data
    })
}
function addIntern(){
    prompt(internQuestions)
    .then(data => {
        intern.push(data)
        console.log(intern)
        askMenu();
        return data
    })
}


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
