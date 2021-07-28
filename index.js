const express = require('express'),
  app = express()

// APP.METÓDO_DO_EXPRESS(CAMINHO_OU_PATH, FUNCAO_HANDLER)
app.get('/', (req, res) => {
  res.send('<h1>VOCÊ ESTÁ NA HOME</h1>')
})

app.get('/sobre', (req, res) => {
  res.send('<h1>VOCÊ ESTÁ NA PÁGINA SOBRE</h1>')
})

app.get('/produto', (req, res) => {
  res.send('<h1>VOCÊ ESTÁ NA PÁGINA PRODUTO</h1>')
})

app.get('/produto/:id/:cor?', (req, res) => {
  console.log(req.params)
  if (req.params.cor) {
    res.send(`<h1>VOCÊ ESTÁ NA PÁGINA DO PRODUTO DE ID ${req.params.id} E DE COR ${req.params.cor}</h1>`)
  } else {
    res.send(`<h1>VOCÊ ESTÁ NA PÁGINA DO PRODUTO DE ID ${req.params.id}</h1>`)
  }
})

app.get('/usuarios/:nome?', (req, res) => {
  const { nome } = req.params
  res.send(nome ? `Página do usuário ${nome}` : 'Página de usuários')
})

app.get('/objeto', (req, res) => {
  res.send({
    nome: "Joselito",
    sobrenome: "Sem Noção",
    melhoresAmigos: "Hermes e Renato"
  })
})

app.get('/array', (req, res) => {
  res.send([
    {
      nome: "Joselito",
      sobrenome: "Sem Noção",
      melhoresAmigos: "Hermes e Renato"
    },
    {
      nome: "Irmão",
      sobrenome: "do Jorel",
      melhoresAmigos: "Shostner e Lara"
    }
  ])
})

app.listen(3000, () => console.log('O servidor está rodando...'))