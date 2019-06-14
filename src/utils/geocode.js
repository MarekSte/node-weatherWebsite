const request = require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(adress) + '.json?access_token=pk.eyJ1IjoibWFyZWswMSIsImEiOiJjandrd2x5dGkwcjJ4NDRxZ2YydzQ5aGQ3In0.QbrHxjZp65LMtXA_9v50QQ&limit=1'

    request({ url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search. ', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
                
            })
        }
    })
}

// or

// request({ url, json:true}, (error, response) => {
//     if (error) {
//         callback('Unable to connect to location services', undefined)
//     } else if (response.body.features.length === 0) {
//         callback('Unable to find location. Try another search. ', undefined)
//     } else {
//         callback(undefined, {
//             latitude: response.body.features[0].center[1],
//             longitude: response.body.features[0].center[0],
//             location: response.body.features[0].place_name
            
//         })
//     }
// })

module.exports = geocode