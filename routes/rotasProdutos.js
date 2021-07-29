const express = require('express'),
  router = express.Router(),
  controllerProdutos = require('../controllers/controllerProdutos')

router.get('/:id', controllerProdutos.getById)

module.exports = router