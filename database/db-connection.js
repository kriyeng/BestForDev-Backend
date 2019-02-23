'use strict'
const { DATABASE_URL } = process.env

const db = require('knex')({
    client: 'pg',
    connection: {
        connectionString: DATABASE_URL,
        ssl: true,
    },
})
