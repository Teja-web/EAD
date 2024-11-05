const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

const users = [
    { name: "CBIT", msg: "Welcome" },
    { name: "hello", msg: "Yentra" }
];

// Generate Token
app.post('/token', (req, res) => {
    const user = { name: req.body.username };
    const token = jwt.sign(user, process.env.SECRET_KEY);
    return res.json({ jwttoken: token });
});

// Basic Test Route
app.get('/', (req, res) => {
    res.send("hellll");
});

// Token Verification Route
app.get('/protected', (req, res) => {
    const header = req.headers['authorization'];
    if (!header) return res.sendStatus(401);

    const token = header.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            console.log("Invalid token");
            return res.sendStatus(403);
        } else {
            console.log(user);
            req.user = user;
            res.json(user);
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
