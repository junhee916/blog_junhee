const express = require('express')
const router = express.Router()
const {
    users_signup_user,
    users_login_user
} = require('../controller/user')

// @route   POST http://localhost:8081/user/signup
// @desc    Register User
// @access  Public
router.post('/signup', users_signup_user)


// @Route   POST http://localhost:8081/user/login
// @desc    Login User / Return Token
// @access  Public
router.post('/login', users_login_user)


module.exports = router