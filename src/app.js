const path = require('path')
const hbs = require('hbs')
const express = require('express')
const chalk = require('chalk')
//define the public directory:
const publicDirectory = path.join(__dirname, '../public')
//define the partials part (header and footer):
const partialDirectory = path.join(__dirname, './template/partials')
//use express:
const app = express()
//get port by heroku provide:
const port = process.env.PORT || 3002 // if heroku port is doesn't exist, the application willl use port 3002

//define the view path:
const viewDirectory = path.join(__dirname, './template/views')
//set up handler bar engine view location:
app.set('views', viewDirectory)
//set view file format to hbs format:
app.set('view engine', 'hbs')
//regist path for partials (header and footer):
hbs.registerPartials(partialDirectory)
//set up static directory:
app.use(express.static(publicDirectory))
//get data from weather file
const weather = require('./util/weather')

app.get('', (req, res)=>{
    res.render('i2', {
        mess: 'Render complete'
    })
})
app.get('/al', (req, res)=>{
    res.render('al',{
        mess: 'Render complete'
    })
})
app.get('/js',(req, res)=>{
    res.render('js',{
        mess: 'Render complete'
    })
})
app.get('/node', (req, res)=>{
    res.render('node',{
        mess: 'Render complete'
    })
})
app.get('/python', (req, res)=>{
    res.render('python', {
        mess: 'Render complete'
    })
})
app.get('/weatherr', (req, res)=>{
   if(!req.query.search){
       return res.send({error: 'You must provide an adrress'})
   }
   const loc = req.query.search
   weather(loc, (error, {Place, Country, Latitude, Longtitude, temperature,time,Img, Description, Winspeed, Visibility}={}/*this is default value  */)=>{
       if(error){
           return res.send({
               error: error
           })
       }else{
           res.send({
                Place: Place,
               Country: Country,
               Latitude: Latitude, 
               Longtitude: Longtitude,
               temperature: temperature,
               time: time,
               Img: Img,
               Description: Description,
               Winspeed: Winspeed,
               Visiblity: Visibility
           })

       }
   })
})
app.get('/weather', (req, res)=>{
    res.render('weather', {mess: 'render complete'})
})
app.get('/hi', (req, res)=>{
    res.send({
        name: 'Khiem',
        age: '20',
        Address: 'Hoa Binh'
    })
})
app.get('/test', (req, res)=>{
    res.render('test',{mess: 'test'})
})
app.get('*', (req, res)=>{
    res.render('404', {
        mess: 'Error'
    })
})
app.listen(port, ()=>{
    console.log(chalk.bgGreen.white.bold("Server is starting on port " +port))
})
