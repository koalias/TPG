import inquirer from 'inquirer'
import fs from 'fs'
import generateTeam from './src/template'

import Engineer from './lib/Engineer'
import Intern from './lib/Intern'
import Manager from './lib/Manager'

const employeeData = [];

//Questions to be asked
const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])

    switch (answers.role) {
      case 'Manager':
        const managerAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your office number?",
              name: "officeNumber",
            },
          ])
          
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
        );
        employeeData.push(newManager);
        break;

      case 'Engineer':
        const githubAns = await inquirer
        .prompt([
          {
            type: "input",
            message: "What is your GitHub user name?",
            name: "github",
          }
        ])
          const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubAns.github
          );
        employeeData.push(newEngineer);
        break;

        case 'Intern':
          const internAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What university did you attend?",
              name: "school",
            },
          ])
          
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
          );
          employeeData.push(newIntern);  
    }

};

const promptQuestions = async() =>  {
  await questions()
    
  const addMemberAns = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: "What would you like to do next?"
      }
    ])
    if (addMemberAns.addMember === 'Add a new member') promptQuestions()
    return createTeam();
}  

promptQuestions();

function createTeam () {
  console.log("new guy", employeeData)
  fs.writeFileSync(
    "./dist/index.html",
    generateTeam(employeeData),
    "utf-8"
  );
}

