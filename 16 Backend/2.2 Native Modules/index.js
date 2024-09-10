const fs = require("fs");

// create a new file and write
// fs.writeFile("msg.txt","Hare Krishna!",(err) =>{
//     if(err) throw err;
//     console.log("File saved.");
// });

//  read created file.
fs.readFile("./msg.txt","utf-8",(err,data) => {
    if (err) throw err;
    console.log(data);
});