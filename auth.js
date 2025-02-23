import express from 'express';
const router = express.Router();
import User from '../models/Auth.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password })
        await user.save();
        res.status(201).json({ message: "User registered sucessfully" })
    }
    catch (error) {
        res.status(400).json({ message: "Error registering user", err: error })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: 'User not found' })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) res.status(400).json({ message: 'Invalid Credentials' })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ token, user: { id: user._id, username: user.username, email: user.email } })
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
})

export default router;