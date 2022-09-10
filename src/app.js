require('dotenv').config();
require('express-async-errors');

const express = require('express')
const app = express()
const routes = require('./routes/main')
const hbs = require('hbs')
const connectDB = require('./db/connect')
const UserSchema = require('./models/detail')
const slider = require('./models/slider');
const detail = require('./models/detail');
const services = require('./models/service')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended:true
}))
app.use('/static',express.static('public'))
app.use('/',routes)


app.set('view engine','hbs')
app.set('views' , 'views')
hbs.registerPartials('views/partials')



const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    // services.create([
    //   {
    //     icon:'fab fa-accusoft',
    //     title:'Provide Best Course',
    //     description:'We provide best course that helps student in placement and learning coding',
    //     linkText:'check',
    //     link:'www.google.com'
    //   },
    //   {
    //     icon:'fa-sharp fa-solid fa-hippo',
    //     title:'Learn from the best',
    //     description:'We provide best course that helps student in placement and learning coding',
    //     linkText:'learn',
    //     link:'www.google.com'
    //   },
    //   {
    //     icon:'fa-sharp fa-solid fa-face-thinking',
    //     title:'Thinking of learning from the best',
    //     description:'We provide best course that helps student in placement and learning coding',
    //     linkText:'start',
    //     link:'www.google.com'
    //   }
    // ])


    // slider.create([
    //   {
    //     title:'Learn Java',
    //     subTitle:'Java is one of the most popular language often use in industry',
    //     url:'/static/images/s1.jpg'
    //   },
    //   {
    //     title:'Learn Python',
    //     subTitle:'Python is one of the most popular language often use in industry',
    //     url:'/static/images/s2.jpg'
    //   },
    //   {
    //     title:'Learn Machine Learning',
    //     subTitle:'Machine Learning is the most evolving language',
    //     url:'/static/images/s3.jpg'
    //   }
    // ])

    
    // UserSchema.create({
    //   brandName:'Kashif Practice Website',
    //   brandNameURL:'dont no the url just copy pasted from online',
    //   link:[{
    //     label:'Home',
    //     url:'/'
    //   },
    //   {
    //     label:'services',
    //     url:'/services'
    //   },
    //   {
    //     label:'Gallery',
    //     url:'/gallery'
    //   },
    //   {
    //     label:'About',
    //     url:'/about'
    //   },
    //   {
    //     label:'Contact Us',
    //     url:'/contact-us'
    //   }
    // ]
    // })
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
