const mongoose = require('mongoose')
const Slider = mongoose.Schema({
    title:String,
    subTitle:String,
    url:String
})

module.exports = mongoose.model('slider' , Slider)