const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a663f2a1518c7f00408180527a0ea3ee/' + latitude + ',' + longtitude +'?units=us&lang=en'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callbasck('Unable to connect to forecast service', undefined)
        } else if (body.error) { 
            callback('Unable to find the forecast for given location', undefined)
        } else {
            callback(undefined, {
                forecastData: `${body.daily.data[0].summary} It is currently ${body.currently.temperature} fahrenheits out. There is a ${body.currently.precipProbability}% chance of rain.`,
                temperatures: `The high today will be ${body.daily.data[0].temperatureHigh} and low of ${body.daily.data[0].temperatureLow} farenheits.`
            })
        }
    })
}

// OR

// request({url, json: true}, (error, response) => {
//     if (error) {
//         callbasck('Unable to connect to forecast service', undefined)
//     } else if (response.body.error) { 
//         callback('Unable to find the forecast for given location', undefined)
//     } else {
//         callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} fahrenheits out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
//     }
// })


module.exports = forecast