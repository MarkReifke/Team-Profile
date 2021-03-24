const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// import the generate html function


const manager = [];
const employees = []; // as you ask questions, you arr filling the enployees array, then once your done with your question, create the HTML using the employyees array
const engineer = [];
const intern = [];

const managerQuestions = [
    {
        type: "input",
        message: "Enter name of manager",
        name: "name",
    },
    {
        type: "input",
        message: "Enter manager Id",
        name: "id",
    },
    {
        type: "input",
        message: "Enter manager email",
        name: "email",
    },
    {
        type: "input",
        message: "Enter manager office number",
        name: "officeNumber",
    }
];
const engineerQuestions = [
    {
        type: "input",
        message: "Enter name of engineer",
        name: "name",
    },
    {
        type: "input",
        message: "Enter engineer Id",
        name: "id",
    },
    {
        type: "input",
        message: "Enter engineer email",
        name: "email",
    },
    {
        type: "input",
        message: "Enter engineer Github",
        name: "github",
    }
];
const internQuestions = [
    {
        type: "input",
        message: "Enter name of intern",
        name: "name",
    },
    {
        type: "input",
        message: "Enter intern Id",
        name: "id",
    },
    {
        type: "input",
        message: "Enter intern email",
        name: "email",
    },
    {
        type: "input",
        message: "Enter intern school attending",
        name: "school",
    },
];
const menu = [
    {
        name:"employee",
        type:"list",
        message: "What employee would you like to add?",
        choices: ["Engineer", "Intern", "Finished"],
    }
]

   

function askQuestion(){
    inquirer.prompt(managerQuestions)
    .then(data => {
        manager.push(data)
        return askMenu
    })
}
function askMenu (){
    inquirer.prompt(menu)
    .then(data => {
        if (data.menu === "Add Engineer"){
            addEngineer()
        }else if(data.menu === "Add Intern"){
            addIntern()
        }else(generatecard(employees))
    
    })
}
function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then(data => {
        engineer.push(data)
        console.log(engineer)
        askMenu();
        return data
    })
}
function addIntern(){
    inquirer.prompt(internQuestions)
    .then(data => {
        intern.push(data)
        console.log(intern)
        askMenu();
        return data
    })
}

askQuestion()

function generatecard(data){
    //loop thougth the employees data
    // call the functions
    // return a big string
}


// 1. get data form the questions
// 2. create html string with that data... general html outline, and then have different cards depending on weahther its manager, engineer, intern
// 3. call generateHTml(with that html string) , meaning create the html page.. look up how to creat an html fil