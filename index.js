#!/usr/bin/env node

const process = require("node:process");

function getWordCount(text) {
  return text.trim().split(" ").length;
}

function printHelpMessage() {
  console.log(
    `Usage: text-statistics "<Text>" 
    Example: 
    text-statistics "Hello World. This is a test." 
    
    Output: 
    "The number of words in "Hello World. This is a test." is: 6`
  );
}

const userArguments = process.argv.slice(2);
if (userArguments.length !== 1) {
  printHelpMessage();
  return;
}

if (userArguments[0] === "--help" || userArguments[0] === "-h") {
  printHelpMessage();
  return;
}

console.log(
  `The number of words in ${userArguments} is ${getWordCount(userArguments[0])}`
);
