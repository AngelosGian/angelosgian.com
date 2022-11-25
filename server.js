const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv')
const routes = express.Router()
env.config({path: './config/.env'})


//General Setting 
app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})



app.listen(process.env.PORT, () => {console.log(`It is alive on port ${process.env.PORT}`)});