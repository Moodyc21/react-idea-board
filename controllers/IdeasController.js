const express = require('express')
const router = express.Router()
const Idea = require('../db/models/Idea')

router.get('/', (req, res) => {

    Idea.find({}).then((ideas) => {
        res.json(ideas)
    })

})

module.exports = router 