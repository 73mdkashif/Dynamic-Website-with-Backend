const express = require('express')
const routes = express.Router()
const detail = require('../models/detail')
const service = require('../models/service')
const slider = require('../models/slider')
const contact = require('../models/contact')

routes.get('/' , async(req , res)=>{
    const details = await detail.findOne({'_id':'6317b6277da01fc307e2c6a2'})
    const slides = await slider.find()
    const services = await service.find()

    // console.log(slides);
    // console.log(details)
    
    res.render('index' , {details:details , slides:slides , services:services} )
})

routes.get('/gallery' , async(req , res)=>{
    const details = await detail.findOne({'_id':'6317b6277da01fc307e2c6a2'})
    res.render('gallery' , {details:details}) 
})

routes.post('/process-contact-form', async(req , res)=>{
    console.log('hi what are you doing')
    console.log(req.body)
    try {

        const data = await contact.create(req.body)
        console.log(data)
        res.redirect('/')
        
    } catch (e) {
        console.log(e)
        res.redirect('/')
    }
})

module.exports = routes