const express = require('express');
const app = express();

app.use(express.json());

// simple test route
app.get('/', (req, res) => {
    res.send('Car Repair System API is running ');
});

// in-memory storage
let issues = [];
let id = 1;

// GET all issues
app.get('/issues', (req, res) => {
    res.json(issues);
});

// POST create issue
app.post('/issues', (req, res) => {
    const newIssue = {
        id: id++,
        description: req.body.description,
        status: "Pending"
    };

    issues.push(newIssue);
    res.json(newIssue);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});