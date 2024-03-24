#! /usr/bin/env node
import inquairer from "inquirer";
const answer = await inquairer.prompt([
    { message: "Enter your Number", type: "number", name: "firstNumber" },
    { message: "Enter your second Number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid number");
}
