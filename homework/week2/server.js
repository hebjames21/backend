const express = require('express');

const app = express();

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `User ID received: ${userId}` });
});

app.listen(3000, () => console.log('Server running on port 3000'));

app.get('/users/:userID/orders/:orderId', (req, res) => {
    const { userId, orderId } = req.params;
    res.json({ message: `User: ${userId}, Order: ${orderId}` });
});

app.get('/search', (req, res) => {
    const { name, age } = req.query;
    res.json({ message: `Searching for name: ${name}, Age: ${age}` });
});

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
});

app.get('/users/:id/orders', (req, res) => {
    const { id } = req.params;
    const { status } = req.query;
    res.json({ message: `Fetching orders for user ${id} with status ${stats}` });
});
