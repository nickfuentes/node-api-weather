// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

//API KEY FOR WEATHER 33df93cf5e443050cc4daa4dd822a5da

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/33df93cf5e443050cc4daa4dd822a5da/29.7692001,-95.31547839999999',
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
    }
});