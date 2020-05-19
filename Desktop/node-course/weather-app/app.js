//const request=require('request')
const geoCode=require('./utils/geoCode.js')
const forecast=require('./utils/forecast.js')


const arg=process.argv[2]
if(!arg){
  console.log("please provide address")
}
else{
  console.log(arg)

geoCode(arg,(error,{latitude,longitude,location}={})=>{
    if(error){
      return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if(error){
        return console.log(error)
      }

      console.log("location", location)
      console.log('Data', forecastData)
    })
  

})
  
}
