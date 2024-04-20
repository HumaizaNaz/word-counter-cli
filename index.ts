#! /usr/bin/env node

//this line is called a shebang  it tell the os to run it with nodejs
import { log } from "console";
import inquirer from "inquirer";

const answers: { sentence: string } = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Enter your sentence to count the word:",
  },
]);
const word = answers.sentence.trim().split(" ")//. means method

//print the array of words to the console
console.log(word)
//print the word count of the sentence to the console
console.log(`your sentence word count is ${word.length}`);
