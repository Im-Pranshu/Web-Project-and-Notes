import express from 'express';
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`The Express Server is started on port ${port}`);
});

// How to access the current activated server on Port-3000
// type in browser :- localhost:3000 and press enter.

// localhost means we want to host our server locally in browser
// making our own comp server of backend of a website.

// port - door of server comp - each door have some address.
// thousands and hundread thousand doors can be there.
// thats why we can run different services on same computer without interfaring with each other.

// to check which port on our computer are currently listneing interaction from outside.
// windows - netstat -ano | findstr "LISTENING"
// | -> known as pipe symbol