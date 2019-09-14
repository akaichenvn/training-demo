'use strict'

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello DMSPro!')
})

var server = app.listen(3000, () => {
    let host = server.address().address
    let port = server.address().port

    console.log('server running at http://%s:%s', host, port)
})
