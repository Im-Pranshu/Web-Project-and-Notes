// added one npm package named sillyname - Which generates random name.

// *********Commonjs style(Default Type of Project configuration)**********
// this will generate a random name.
// var generateName = require("sillyname");// using external module by using require() in js code.

// *********Module import style(Another type of project configuration)**********
import generateName from "sillyname";

// above line is default
var sillyname = generateName();// now new name is generated and stored
console.log(`Your name is ${sillyname}`);// print name.

// Import the named export 'randomSuperhero' from the 'superheroes' package.
// This function allows us to get a random superhero name.
import { randomSuperhero } from "superheroes";

// Call the 'randomSuperhero' function, which returns a random name from the internal superhero list.
// The result is stored in the 'name' variable.
const name = randomSuperhero();

// Log the superhero name to the console, with a message.
console.log(`I am ${name}!`);