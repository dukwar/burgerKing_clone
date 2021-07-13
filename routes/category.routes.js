const {Router} = require('express')
const router = Router()
const Category = require('../models/Category')


router.post('/generate', async (req, res) => {

    try {

        const {name, value} = req.body
        const existing = await Category.findOne({name})

        if (existing) {
            res.json({existing})
        }

        const category = new Category({
            name,
            value
        })

        await category.save()

        res.status(201).json({message:'Категория создана', category})


    } catch (e) {
        res.status(401).json('Что-то пошло не так')
    }

})


router.get('/', async (req, res) => {

    try {

        const categories = await Category.find()

        if (categories) {
            res.json({message: 'Все категории!', categories})
        }

    } catch (e) {
        res.status(401).json('Что-то пошло не так')
    }

})

module.exports = router