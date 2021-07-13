const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const {body, validationResult} = require('express-validator')
const config = require('config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middleware/auth.middleware')



router.post('/register',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration)

router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)


module.exports = router