const request = require ('request')

const geoCode = (address,callback)=>{
    const urlNew = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicnNzdWJhc2luZ2hlIiwiYSI6ImNrOXlyZm53dDAxNXEzamx0aGY5bXo4cGIifQ.z_RLaD4Kanl43tgdGYfB3g&limit=1'
    
    request({url: urlNew, json:true}, (error,{body}={})=>{
        if (error) {
            callback("Sorry. Can't access the serice",undefined)
    
        } else if (body.features.length === 0){
    
            callback('unable to fine the location', undefined)
        } else {
            
            callback(undefined, {
                location: body.features[0].place_name,
                longitude: body.features[0].center[1],
                latitude: body.features[0].center[0]
            })
        }
    
    })

    
    
    }
 module.exports = geoCode