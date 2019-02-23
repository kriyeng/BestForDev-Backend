'use strict'
const db = require('../database/db-connection')

module.exports = function(admin_app) {
    admin_app.get('/', getAdminRoot)
    admin_app.get('/link/proposed', getProposed)
    admin_app.put('/link/approve', putApprove)
    admin_app.delete('/link/delete', deleteLink)
}

function getAdminRoot(req, res) {
    res.status(200).send(`Inside Admin`)
}

function getProposed(req, res) {
    res.status(200).send([])
}

function putApprove(req, res) {
    res.status(200).send(`Link approved`)
}

function deleteLink(req, res) {
    res.status(200).send(`Link deleted`)
}
