import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'
import generateToken from '../utils/generateToken.js'


//@desc Auth /user/set Token
//route POST /api/users/auth
//@acces Public
const authUser = asyncHandler(async (req,res) => {

    const { email, password } = req.body;
    
    const user = await User.findOne({email})
    console.log(user);
    if(user && (await user.matchPassword(password.trim()))) {
        generateToken(res,user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        });
    }else {
        res.status(401);
        throw new Error(`invalid email or password`);
    }
    })
//@desc    register new user
//route POST /api/users/
//@access Public
const registerUser = asyncHandler(async (req, res) => {
const {name,email,password} = req.body;

const userExsists = await User.findOne({email})
if(userExsists) {
    res.status(400);
    throw new Error(`User alreay exsists`)
}
const user = await User.create({name,email,password})
if(user) {
    generateToken(res,user._id)
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        role:user.role
    })
}else {
    res.status(400);
    throw new Error("invalid user data!")
}
res.status(200).json({message:"register User"})
})

export {
    authUser,
    registerUser,

}