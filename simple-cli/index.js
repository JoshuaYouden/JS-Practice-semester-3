#!/usr/bin/env node

const process = require("node:process");

const arguments = process.argv.slice(2);

if (arguments.includes("--greet")) {
  console.log("Hello World!");
} else {
  console.log("Not Present");
}
