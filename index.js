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

// 🧪 Test Route for Merge Behavior
app.get("/test", (req, res) => {
    res.json({
        message: "This is a test route added from feature branch 🧪"
    });
// Added a simple test route from dev branch
app.get("/test", (req, res) => {
    res.json({ message: "Test route from dev branch ⚙️" });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
