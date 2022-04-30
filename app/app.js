const express = require('express')
const request = require('supertest')


const app = express()
const port = 3000

app.get ('/', (req, res) => {
    res.send('Hello World!!')
})
request (app)
.get(`/`)
.send(`Hello World!!`)
.expect(200)

app.get ('/launchx', (req, res) =>{
    res.send(`Bienvenidos a LaunchX`)
})

app.get ('/explorersInNode', (req, res) =>{
    const explorer = {
        name: "Explorer",
        msg: "Hello!"
    }
    res.send(explorer)
})

app.get ('/explorers/:explorerName', (req, res) =>{
   
    res.send (req.params)
})

app.listen(port, () => {
    console.log (`Example app listening on port ${port}`)
})


module.exports = app
