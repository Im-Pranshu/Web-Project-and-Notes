import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
// var qr = require('qr-image');

inquirer
  .prompt([{
    /* Pass your questions in here */
    message: "Type in Your URL: ",
    name: "URL"
}])
  .then((answers) => {
    const url = answers.URL;

    // syntax
    // qr.image(text, [ec_level | options]) — Readable stream with image data; like here default type is png so we can skip writing type of the image.
    var qr_png = qr.image(url);// The .image() method of the qr library is used to generate a QR code image for the specified url. The url is the data (usually a website URL or some text) you want to encode into the QR code.
    qr_png.pipe(fs.createWriteStream('qr.png'));// piping the generated QR code image to a file, which results in the image being saved as qr.png in your file system.

    fs.writeFile("URL.txt", url , (err)=>{
        if (err) throw err;
        console.log("URL is stored in file.")
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

