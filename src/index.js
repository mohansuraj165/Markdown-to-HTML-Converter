import { parse } from "./parser.js";
import stringbuilder from "string-builder"
import readline from "readline";
import fs from "fs";
import {generateFileName} from "./generateFileName.js"

console.log("Started program");

var html = new stringbuilder();
const fileName = generateFileName()

//Creates an interface to read markdown input
const readInterface = readline.createInterface({
  input: fs.createReadStream("./src/markdown.txt"),
  //output: process.stdout,
  console: false,
});

//Each line is converted to HTML and stored
readInterface.on("line", function (line) {
  html.appendLine(parse(line))
});

//Upon completion of read, a HTML file is created 
readInterface.on('close', function() {
  let path = `${fileName}.html`
  fs.appendFile(path, html.toString(), function (err) {
    if (err) throw err;
    console.log("Completed");
  });
})





