const request = require('request')

const key = '8def27616d50b4fc59eb5a5e13a84bba'
const getWeather = (loc, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key='+encodeURIComponent(key)+'&query='+loc+'&unit=m'
    request({url: url, json:true},(error,{body})=>{
        if(error){
            callback('No internet connection', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                "Place":body.location.name,
                "Country":body.location.country,
                "Latitude": body.location.lat,
                "Longtitude": body.location.lon,
                "temperature": body.current.temperature,
                "time": body.current.observation_time,
                "Img":body.current.weather_icons,
                "Description": body.current.weather_descriptions,
                "Winspeed": body.current.wind_speed,
                "Visibility": body.current.visibility
            })
        }
    })
}
module.exports = getWeather
// loc = 'HaNoi'
// const url = 'http://api.weatherstack.com/current?access_key='+encodeURIComponent(key)+'&query='+loc+'&unit=m'
// request({url:url, json:true},(error,{body})=>{
//     console.log(body.current.visibility)
// })