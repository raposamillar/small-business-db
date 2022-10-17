const { prompt } = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

// start of the application
function init() {
  prompt([
    {
      type: 'list',
      name: 'task',
      message: 'What would you like to do?',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
  ]).then(({task})=>{
    // 'view' if statements
    if(task=='view all departments') {
      db.promise().query('SELECT * FROM department').then(data=>{
        console.table(data[0]);
        init();
      })
    };

    if(task=='view all roles') {
      db.promise().query('SELECT * FROM role').then(data=>{
        console.table(data[0]);
        init();
      })
    };

    if(task=='view all employees') {
      db.promise().query('SELECT * FROM employee').then(data=>{
        console.table(data[0]);
        init();
      })
    };

    // 'add' if statement
    // if(task=='add a department') {
    //   db.promise().query('INSERT INTO department(name) VALUES?').then(data=>{for (let i = 4; i < department.length; i++)
    //     console.table(data[i]);
    //     init();
    //   })
    // };

    // exports.db_insert = function(department, name) {

    // }

    // if(task=='add a department') {
    //   db.promise().query('INSERT INTO department(name) VALUES?').then(({department})(data=>{for (let i = 4; i < department.length; i++)
    //     console.table(data[i]);
    //     init();
    //   }))
    // };


  })

}

init();