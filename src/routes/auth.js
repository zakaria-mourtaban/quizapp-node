import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
	const { username, email, password } = req.body;
	try {
		const user = new User({ username, email, password });
		await user.save();
		res.status(201).json({ message: "User registered successfully." });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user || !(await user.comparePassword(password))) {
			return res
				.status(400)
				.json({ message: "Invalid email or password." });
		}
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});
		res.json({ token });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

export default router;