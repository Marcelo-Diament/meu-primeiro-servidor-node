const express = require('express'),
  router = express.Router()

router.get('/', (req, res) => {
    res.send(`<h1>VOCÊ ESTÁ NA PÁGINA SOBRE</h1>`)
})

module.exports = router