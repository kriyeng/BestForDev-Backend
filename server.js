const express = require('express')
const cors = require('cors')

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

const admin = require('./controllers/admin')(admin_app);

app.use(['/mod', '/admin'], admin_app)

app.listen(3000, () => {
    console.log('listening on 3000')
})
