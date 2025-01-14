// Build a mini-project: Create a RESTful API with at least three resources and routes for each CRUD operation.
//make a server and endpoint, test with postman

const express = require('express');
const app = express();

const port = 3000;

//app.use(express.json());
//this was on perplexity but not in the study guide. why?

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

let name = [];
let email = [];
let 