const express = require('express');
const { getUsers } = require('./db');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/users', async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

app.listen(3000, () => console.log('Server started on port 3000'));