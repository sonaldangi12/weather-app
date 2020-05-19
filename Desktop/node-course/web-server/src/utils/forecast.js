const request=require('request')
const forecast= (latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=66ea6090c0a179243944f6b30da80f59&query="+latitude +","+ longitude + "&units=f"
    request({ url,json:true}, (error, {body}) => {
        if(error){
            callback("unable to connect" ,undefined)
        }else if(body.error){
            callback("Unable to find location",undefined)
    
        }
        else{
            callback(undefined,{
                description: body.current.weather_descriptions[0],
                actual : body.current.temperature,
                feels_like:body.current.feelslike
            })

}
    })}
module.exports = forecast