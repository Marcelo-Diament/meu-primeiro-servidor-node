const express = require('express'),
  app = express(),
  rotasProdutos = require('./routes/rotasProdutos'),
  rotasSobre = require('./routes/rotasSobre')

app.get('/', (req, res) => {
  res.send(`<h1>VOCÊ ESTÁ NA HOME</h1>`)
})
app.use('/produtos', rotasProdutos)
app.use('/sobre', rotasSobre)

app.listen(3000, () => console.log('O servidor está rodando...'))