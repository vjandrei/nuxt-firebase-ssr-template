const functions = require('firebase-functions');
const { Nuxt } = require('nuxt-start');
const nuxtConfig = require('./nuxt.config.js');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const config = {
    ...nuxtConfig,
    debug: false,
    buildDir: 'nuxt',
};
const nuxt = new Nuxt(config);
  
exports.ssrapp = functions.https.onRequest((req, res) => nuxt.render(req, res));