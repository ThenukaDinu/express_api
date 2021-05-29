const express = require('express');
const port = 3000
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('We are on Home')
})
app.get('/posts', (req, res) => {
    res.send('We are on Posts')
})

// listening
app.listen(port ,() => {
    console.log(`App listening at http://localhost:${port}`)
})