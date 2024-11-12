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

// Generate Token based on user-provided data
app.post('/token', (req, res) => {
    const { username, msg } = req.body;
    if (!username || !msg) {
        return res.status(400).json({ error: "Username and message are required" });
    }

    // Create a payload using the body data
    const payload = { name: username, message: msg };
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });

    return res.json({ token });
});

// Basic Test Route
app.get('/', (req, res) => {
    res.send("Hello, world!");
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
        }

        // Send back the decoded user information
        res.json({ user });
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
