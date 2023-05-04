const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://geocode.maps.co/search?q=' + encodeURIComponent(address) + '&limit=1'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to Connect to Location services!', undefined)
        } else if (body.length === 0) {
            callback('Location not found. Try another search', undefined)
        } else {
            callback(undefined, {
                location: body[0].display_name,
                latitude: body[0].lat,
                longitude: body[0].lon
            })
        }
    })

}

module.exports = geocode