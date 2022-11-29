const express = require('express')
const app = express()
const { port } = require('../config').api

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'ok' })
})
app.listen(port, () => {
    console.log(`Servidor se inicio en el puerto ${port}`)
})