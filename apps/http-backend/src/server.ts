import express, { NextFunction, Request, Response } from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("HTTP server is up and running...");
});

app.post("/signup", (req, res) => {
	try {
		const { name, email, password, confirmPassword } = req.body;

		if (!name || !email || !password || !confirmPassword) {
			res.status(400).send("Missing required fields");
		}

		if (password !== confirmPassword) {
			res.status(400).send("Passwords do not match");
		}

		// Save user to database
		res.status(201).send("User created successfully");
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal server error");
	}
});

app.post("/login", (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			res.status(400).send("Missing required fields");
		}

		// Check if user exists in database
		// If user exists, check if password is correct
		// If password is correct, return user data
		res.status(200).send("Login successful");
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal server error");
	}
});

app.post("/create-room", (req, res) => {
	try {
		const { name } = req.body;

		if (!name) {
			res.status(400).send("Missing required fields");
		}

		// Create room in database
		res.status(201).send("Room created successfully");
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal server error");
	}
});

app.listen(3001, () => {
	console.log("Listening on port 3001");
});
