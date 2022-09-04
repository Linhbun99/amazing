const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

router.get('/', (req, res) => {
    res.send("user route")
})

router.post('/register', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res
            .status(400)
            .json({
                sucess: false,
                message: 'Missing username or password'
            })
    }
    try {
        const user = await User.findOne({ username })
        if (user) {
            return res
                .status(400)
                .json({
                    sucess: false,
                    message: 'Username already used'
                })
        }

        const hashedPassword = await argon2.hash(password)
        const newUser = new User({ username, password: hashedPassword })
        await newUser.save()

        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET)

        return res.json({
            success: true,
            message: "Register successfully",
            accessToken
        })
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: "Failed",
            })
    }
})

module.exports = router