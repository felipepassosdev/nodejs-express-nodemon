const express = require('express')

const server = express()

// Query param =?teste=1
// Route params = /users/1
// Request body = { "name": "Felipe" }

const users = ['Felipe', 'Jhosé Carlos', 'Luiz Eduardo', 'Nicolas']

server.get('/users/:index', (req, res) => {

    // const nome = req.query.nome
    const { id, index } = req.params

    return res.json(users[index])
})

server.listen(3001)