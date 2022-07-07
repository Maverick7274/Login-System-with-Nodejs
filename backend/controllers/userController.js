const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')




// @Description : Registers NEW Users
// @Routing : /api/users/
// @Access : Public

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password ){
        res.status(400)
        throw new Error("Please Add All Fields")
    }
    
    // Check User Existence

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error("Sorry, the user Already Exists")
    }


    // Hash Passwords

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    // Create User

    const user = await User.create({
        name,
        email,
        password: hashPassword,
    })

    if(user) {
        res.status(201).json({
            _id : user.id,
            name : user.name,
            email : user.email,
            token: generateToken(user._id),
        })
    } else{
        res.status(400)
        throw new Error("Invalid User Data")
    }
})


// @Description : Login user
// @Routing : /api/login/
// @Access : Public

const loginUser = asyncHandler(async (req, res) => {
    
    const {email, password} = req.body

    // Check for user Email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id : user.id,
            name : user.name,
            email : user.email,
            token: generateToken(user._id),
        })
        } else {
            res.status(400)
            throw new Error("Invalid Credentials")
    }
})


// @Description : GET Users Data
// @Routing : /api/users/userData
// @Access : Private

const getUserData = asyncHandler(async (req, res) => {

    const {_id , name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })




    res.json({message: "User Data"})
})

// Generate JWT

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}



module.exports ={
    registerUser,
    loginUser,
    getUserData,
}