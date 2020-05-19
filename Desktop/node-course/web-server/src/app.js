const express=require('express')
const path=require('path')
const geoCode=require('./utils/geoCode.js')
const forecast=require('./utils/forecast.js')
const port=process.env.PORT || 3000



const app=express()
const hbs=require('hbs')
//Define paths for express config
const publicDir=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

app.use(express.static(publicDir))
hbs.registerPartials(partialsPath)

//setup views
app.set('view engine','hbs')
app.set('views',viewPath)

app.get('',(Request,Response)=>{
    Response.render('index',{
        title:'Weather-app',
        name:'Sonal Dangi'
    })
})
app.get('/about/',(Request,Response)=>{
    Response.render('about',{
        title:"About Me",
        name:"Sonal Dangi"
    })
})
app.get('/help/',(Request,Response)=>{
    Response.render('help',{
        title:"Help page",
        name:"Sonal Dangi"
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geoCode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products',(Request,Response)=>{
    if(!Request.query.search){
        return Response.send({
            error:"Please provid search term"
        })
    }
    console.log(Request.query)
    Response.send({
        products: {}
    })

})
app.get('/help/*',(Request,Response)=>{
    Response.render('error',{
        title:"Help page",
        name:"Sonal Dangi",
        msg:"Help page not found"
    })

})
app.get('*',(Request,Response)=>{
    Response.render('error',{
        title:"Help page",
        name:"Sonal Dangi",
        msg:"My 404 Page"
    })

})
app.listen(port,()=>{
    console.log("Server is up")
})