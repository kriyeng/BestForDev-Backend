'use strict'
const twitterAPI = require('node-twitter-api')

const { KEY, SECRET } = process.env
const twitter = new twitterAPI({
    consumerKey: KEY,
    consumerSecret: SECRET,
    callback: 'http://localhost:3000/access-token',
})

module.exports = function(app) {
    app.get('/request-token', getRequestToken)
    app.get('/access-token', getAccessToken)
}

function getRequestToken(req, res) {
    res.status(200).send(`Request Token`)
}

function getAccessToken(req, res) {
    res.status(200).send(`Access Token`)
}
