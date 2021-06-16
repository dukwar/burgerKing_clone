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
// [
//     check('email', 'Некорректный адрес почты').isEmail(),
//     check('password', 'Минимальная длина пароля 6 символов!').isLength({min: 6})
//     ],
//     async (req, res) => {
//
//     try {
//         const errors = validationResult(req)
//
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 errors,
//                 message: 'Некорректные данные при регистрации'
//             })
//         }
//
//
//         const {email, password} = req.body
//         const oldUser = await User.findOne({email})
//         if (oldUser) {
//             res.status(400).json({message:'Такой пользователь уже зарегистрирован'})
//
//         }
//
//         const hashedPassword = await bcrypt.hash(password, 12)
//         const user = new User({email, password: hashedPassword})
//
//         await user.save()
//
//         res.status(201).json({message: 'Пользователь создан!'})
//
//
//
//     } catch (e) {
//         res.status(500).json({message: 'Что-то пошло не по плану, попробуйте снова!'})
//     }
// })

// router.post('/login', [
//     check('email', 'Введите корректный email').normalizeEmail().isEmail(), // валидируем email, isEmail - встроенный метод в express-validator
//     check('password', 'Введите пароль').exists()
// ],
//     async (req, res) => {
//
//     try {
//
//         const errors = validationResult(req)
//
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 errors,
//                 message: 'Некорректные данные при входу в систему'
//             })
//         }
//
//         const {email, password} = req.body
//         const user = await User.findOne({email})
//         if (!user) {
//             res.status(400).json({message: 'Пользователь не найден!'})
//         }
//
//         const matchPassword = bcrypt.compare(password, user.password)
//
//         if (!matchPassword) {
//             res.status(400).json({message: 'Неверный пароль!'})
//         }
//
//        const token = jwt.sign(
//             {
//                 userId: user.id,
//                 email: user.email
//             },
//             config.get('jwtSecret'),
//             {expiresIn: '1h'}
//         )
//
//         res.json({message: 'Вы успешно выполнили вход!', token, userId: user.id})
//
//
//
//     } catch (e) {
//
//         res.status(500).json({message: 'Что-то пошло не так, попробуйте снова!'})
//     }
//
// })

router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)


module.exports = router