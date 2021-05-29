const express = require('express');
const port = 3000
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// Middleware
app.use(cors())
app.use(bodyParser.json())

//Import Routes 
const postRoutes = require('./routes/posts')

app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('We are on Home')
})

// Connect To DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected To DB');
    })

// listening
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})