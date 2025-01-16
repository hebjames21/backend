// Build a mini-project: Create a RESTful API with at least three resources and routes for each CRUD operation.
//make a server and endpoint, test with postman

const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/route', (req, res) => res.send('GET request'));

app.post('/route', (req, res) => res.send('POST request'));

app.put('/route/:id', (req, res) => res.send('Update item ${req.params.id}'));

app.delete('/route/:id', (req, res) => res.send('Delete item ${req.params.id}'));

app.get('/data', (req, res) => {
    res.json({message: 'Hello, world!'});
});

