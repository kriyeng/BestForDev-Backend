'use strict'

const { consumerKey, consumerSecret, callbackURL, databaseURL } = secrets

const db = require('knex')({
    client: 'pg',
    connection: {
        connectionString: databaseURL,
        ssl: true,
    },
})
