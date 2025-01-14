// Import Express
// npm i express
const express = require('express');

// Initialize the app
const app = express(); //express is a method

app.use(express.json()); // Middleware to parse JSON body

// Define a port
const PORT = 3000;

// Define a simple route *****THIS IS A GET REQUEST*****
app.get('/', (req, res) => {  //req, res cycle
    console.log("GET route hit / - ", req)
    res.send('From Get req on Server!');
});

// app.get('/han', (req, res) => {
//     console.log("hannah")
// })

// app.get('/request', (req, res) => {
//     console.log("got request")
// })

app.post('/', (req, res) => { //req, res cycle
    console.log("POST route hit / - ", req.body)
    res.json({msg: 'From Post req on server!', data: req.body }); //response
});


app.get("/pokemon", (req, res) => {
    console.log("pokemon hit")
    res.json({msg: "pokemon hit"})
})
app.get("/", (req, res) => {
    console.log("/ endpoint  hit")
})

// Start the server
app.listen(PORT, () => {   
     console.log(`Server is running on http://localhost:${PORT}`);
     });






