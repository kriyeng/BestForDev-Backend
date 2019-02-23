'use strict'
const db = require('../database/db-connection')

module.exports = function(app) {
    app.get('/categories', getCategories)
    app.get('/category/:id', getCategory)
    app.post('/link/add', postLink)
}

function getCategories(req, res) {
    res.status(200).send([])
}

function getCategory(req, res) {
    const id = req.params.id
    res.status(200).send(id)
}

function postLink(req, res) {
    const { url, title, category, id } = req.body
    res.status(200).send('lonk posted')
}
