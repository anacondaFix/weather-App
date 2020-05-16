const request = require('request')

const forecast = (long, lat, callback)=>{
    const urlNew='http://api.weatherstack.com/current?access_key=68f06efc207e4885021eec30600ddbda&query='+long+','+ lat
    request({url:urlNew, json:true},(error,{body}={})=>{
        if(error){
           callback("Sorry.Can't access the service", undefined)     

        } else if (body.error){

            callback(body.error.info,undefined)

        } else{
            callback(undefined, {
               // location: response.body.location.name,
               // forecast: 'it is currently '+ body.current.temperature + ' out. It feels like '+ body.current.feelslike+' deg. out'
                forecast: 'current forecast is :'+ body.current.weather_descriptions[0]
        
            })

        }





    }) 


}
module.exports = forecast