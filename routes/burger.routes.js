const {Router} = require('express')
const router = Router()
const Burger = require('../models/Burger')


router.post('/generate', async (req, res) => {

    try {

        const {picture, name, price, category} = req.body
        const existing = await Burger.findOne({name})

        if (existing) {
            res.json({existing})
            process.exit()
        }

        const burger = new Burger({
            picture,
            name,
            price,
            category

        })

        await burger.save()
        res.status(201).json({message:'Бургер создан', burger})


    } catch (e) {
        res.status(401).json('Что-то пошло не так')
    }

})

router.post('/delete', async (req, res) => {

    try {

        const {name} = req.body
        const burger = await Burger.findOne({name})

        if (!burger) {
            res.json({message: 'Такой бургер не найден в базе!'})
        }

        await burger.delete()
        res.status(201).json({message:'Бургер удален', burger})

    } catch (e) {
        res.status(401).json('Что-то пошло не так')
    }

})


router.get('/all', async (req, res) => {

    try {

        const burgers = await Burger.find()

        if (burgers) {
            res.json({message: 'Вот все бургеры!', burgers})
        }


    } catch (e) {
        res.status(401).json('Что-то пошло не так')
    }

})


router.get('/:category', async (req, res) => {

    try {

        const category = req.params.category
        const burgers = await Burger.find({category: category})

       if (burgers) {
           res.json({message: 'Вот ваши бургеры!', burgers})
       }

    } catch (e) {
        res.status(401).json('Что-то пошло не так')
    }

})

module.exports = router



