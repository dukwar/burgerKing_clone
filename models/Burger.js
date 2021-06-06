const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    picture: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},

})

module.exports = model('Burger', schema)

