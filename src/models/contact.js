const mongoose = require('mongoose')

const Contact = mongoose.Schema({
    email:String,
    number:String,
    query:String
})

module.exports = mongoose.model('contacts', Contact)