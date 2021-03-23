const manager = require("../index.js")
const engineer = require("../index.js")
const intern = require("../index.js")

const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

let employee1 = new Manager(manager[0].name, manager[0].id, manager[0].email, manager[0].officeNumber);
console.log(manager)
console.log(employee1)
const generatecard = (manager, engineer, intern) =>{
    
}
