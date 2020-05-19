const request=require('request')
const geoCode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic29uYWxkYW5naSIsImEiOiJjazl6c2hnbjAwOW9wM2ZydDdqOHQyOXp5In0.b1f9lmeKbHNPVZOaAMTAtg&limit=1"
    request({ url,json:true}, (error,{body})=>{
        if(error){
            callback("Unable to connect to network",undefined)
        }else if(body.features.length===0){
            callback("Unable to find location try other search",undefined)
    
        }else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
        
    })

}
module.exports= geoCode