'use strict'
const twitterAPI = require('node-twitter-api')

const secrets = require('./secrets')
const { consumerKey, consumerSecret, callbackURL } = secrets

const twitter = new twitterAPI({
    consumerKey: consumerKey,
    consumerSecret: consumerSecret,
    callback: callbackURL,
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
