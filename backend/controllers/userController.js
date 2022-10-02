const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcry = require('bcryptjs')

//@desc Login user
//@Route /api/user/login
//access Private

const login = asyncHandler(async(req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(400)
        res.send(res.json({ success: false, messege: 'Please fill your Credentails' }))
    }
    const userdata = await User.findOne({ username })
    // console.log(await bcry.compare(password, userdata.password))
    if (userdata && (await bcry.compare(password, userdata.password))) {
        res.status(200).json({
            Success: true,
            token: generateToken(userdata._id),
            isAdmin: userdata.isAdmin,
            name:username
        })

    } else {
        res.status(400)
        res.json({ success: false, messege: 'Incorrect Username or Password' })
    }
})
//@desc Register user
//@Route /api/user/
//access Private

const register = asyncHandler(async(req, res) => {
    const { username, password } = req.body
    console.log(username, password)
    if (!username || !password) {
        res.send(res.json({ success: false, messege: 'Please Complete your Credentials ' }))
    }
    const data = await User.findOne({ username })
    if (data) {
        res.send(res.json({ success: false, messege: 'Invalid Username try another' }))
    } else {
        const salt = await bcry.genSalt(10)
        const hashpassword = await bcry.hash(password, salt)
        const userdata = await User.create({
            username: username,
            password: hashpassword
        })
        if (userdata) {
            res.status(201)
            res.send(res.json({
                success: true
            }))
        } else {
            res.status(400)
            throw new Error('Invalid User Data')
        }
    }
})

//@des GET User Data
//@route /api/user/me
const getuser = asyncHandler(async(req, res) => {
    console.log(req.user.id)
    const { id, username, password } = await User.findById(req.user.id)
    res.status(200).json({
        id: id,
        username: username,
        password: password
    })
})

// Generate JWT Token
const generateToken = (id) => {
    // console.log(id)
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    login,
    register,
    getuser
}