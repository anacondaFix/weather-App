//core modules
const path = require('path')

//npm modeules
const express = require ('express')
const hbs = require('hbs')

//Accessing other modules
const forecast = require ('./utils/forecast.js')
const geoCode = require ('./utils/geoCode.js')

const app = express()
const port = process.env.PORT || 4000

//define paths for express config
const pubicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//define handlebars (hbs) engine and views diectory
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//define static folder 
app.use(express.static(pubicDirectoryPath))



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sampath'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About page',
        description: 'This is about the weather App',
        name: 'sampath'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Weather App Help page',
        helpMessage: 'type localhost:4000/',
        name: 'sampapth'
    })

})

app.get('/weather',(req, res)=>{
    if (!req.query.address){
       return res.send({
           error: 'Please enter a valid address'
    })
    }
    geoCode(req.query.address, (error,{longitude, latitude, location} ={})=>{
        if (error){
            return res.send ({
                error: error
            })
          //  return console.log('error: '+ error)
        }
          forecast(longitude, latitude, (error, {forecast}={}) => {
            if (error){
                return res.send({
                    error: error
                })
              //  return console.log('Error2', error)
            }
            res.send({
                location: location,
                forecast: forecast,
            

            })
          })
      })
})

app.get('/product', (req, res)=>{
    if (!req.query.search){
        return res.send({
            error: 'you need to specify the search'
        })
    }
    console.log(req.query)
    res.send({
        products:[]
    })
})

app.get('/help/*',(req, res)=>{
    res.render('error404',{
        title:'ERROR 404',
        message:'Help Document Not Found',
        name: 'sampath'
    
    })

})

app.get('*',(req, res)=>{
    res.render('error404',{
        title:'ERROR 404',
        message:'Page not found',
        name: 'sampath'
    })

})




app.listen(port,()=>{
    console.log('server is up on the port '+port)
}) 