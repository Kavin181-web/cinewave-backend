const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Mock User
const user = {
    email: "admin@gmail.com",
    password: "123456"
};

// Home Route
app.get("/", (req, res) => {
    res.send("CineWave Backend Running");
});

// Login Route
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Enter a valid email address"
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            success: false,
            message: "Password must be at least 6 characters"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Login Successful"
    });
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});