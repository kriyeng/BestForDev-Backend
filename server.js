const express = require('express')
const cors = require('cors')
const twitterAPI = require('node-twitter-api')
const secrets = require('./controllers/secrets')
const { KEY, SECRET, DATABASE_URL } = process.env
const twitter = new twitterAPI({
    consumerKey: KEY,
    consumerSecret: SECRET,
    callback: 'http://localhost:3000/access-token',
})
const db = require('knex')({
    client: 'pg',
    connection: {
        connectionString: DATABASE_URL,
        ssl: true,
    },
})

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('It is working')
})

const twitter = require('./login/twitter')(app);
const users = require('./controllers/users')(app);

//admin section, using a subapp
const admin_app = express()

admin_app.get('/', (req, res) => {
    res.send('Inside admin')
})

const admin = require('./controllers/users')(admin_app);

app.use(['/mod', '/admin'], admin)

app.listen(3000, () => {
    console.log('listening on 3000')
})
