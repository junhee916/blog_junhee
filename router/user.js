const express = require('express')
const userModel = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const router = express.Router()


// @route   POST http://localhost:8081/user/signup
// @desc    Register User
// @access  Public

router.post('/signup', async (req, res) => {

    const {name, email, password} = req.body

    try{
        const user = await userModel.findOne({email})
        if(user){
            return res.status(400).json({
                msg : "user email, please other email"
            })
        }
        else{
            const user = new userModel({
                name, email, password
            })

            await user.save()
            res.json(user)
        }



    }catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
    // bcrypt.hash(password, 10, (err, hash) => {
    //
    //     if(err){
    //         return res.status(401).json({
    //             msg : err.message
    //         })
    //     }
    //     else{
    //         userModel
    //             .findOne({email})
    //             .then(user => {
    //                 if(user){
    //                     return res.status(402).json({
    //                         msg : "user email, please other email"
    //                     })
    //                 }
    //                 else{
    //
    //                     const newUser = new userModel(
    //                         {
    //                             name,
    //                             email,
    //                             password : hash,
    //                         }
    //                     )
    //
    //                     newUser
    //                         .save()
    //                         .then(user => {
    //                             res.json({
    //                                 msg : "register user",
    //                                 userInfo : user
    //                             })
    //                         })
    //                         .catch(err => {
    //                             res.status(500).json({
    //                                 msg : err.message
    //                             })
    //                         })
    //                 }
    //             })
    //             .catch(err => {
    //                 res.status(500).json({
    //                     msg : err.message
    //                 })
    //             })
    //     }
    // })
})

// login

// @Route   POST http://localhost:8081/user/login
// @desc    Login User / Return Token
// @access  Public

router.post('/login', (req, res) => {

})

module.exports = router