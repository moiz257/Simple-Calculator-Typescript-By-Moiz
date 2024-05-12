#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "num1",
        message: "ENTER FIRST NUMBER?",
        type: "number"
    },
    {
        name: "num2",
        message: "ENTER SECOND NUMBER?",
        type: "number"
    },
    {
        name: "operation",
        message: "SELECT YOUR OPERATION",
        type: "list",
        choices: ["addition", "subraction", "multiplication", "division"]
    }
]);
if (answer.operation === "addition") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operation === "subraction") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operation === "multiplication") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operation === "division") {
    console.log(answer.num1 / answer.num2);
}
else
    (console.log("OPERATION ERROR"));
