const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.json({
        "message": "Hello from CI/CD Pipeline 🚀"
    });
});

// 🆕 New Feature: Health check route
app.get("/status", (req, res) => {
    res.json({
        status: "Server is running smoothly ✅",
        uptime: process.uptime().toFixed(2) + " seconds",
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
