#! /usr/bin/env node

import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let Add = await inquirer.prompt([
        { message: "what do you want add in your bucket list", type: "input", name: "todo" },
        { message: "do you want to add more your bucket wish", type: "confirm", name: "confirm", default: "false" }
    ]);
    todos.push(Add.todo);
    condition = Add.confirm;
    console.log(todos);
}