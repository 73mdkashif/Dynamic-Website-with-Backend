const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    brandName:String,
    brandNameURL:String,
    link:[{
        label:String,
        url:String
    }]
})

module.exports = mongoose.model('Details' , UserSchema)