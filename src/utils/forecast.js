const request = require('request')

const forecast = (latitude, longitute, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=da7ed9ff2588aba03b62df70c90a3b55&query=' + latitude + ',' + longitute + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to access weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find desired location!', undefined)
        } else {
            callback(undefined, 'It is about ' + body.current.temperature + ', and it feels like ' + body.current.feelslike)
        }
    })

}

module.exports = forecast