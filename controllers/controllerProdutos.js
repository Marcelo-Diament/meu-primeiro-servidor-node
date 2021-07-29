const controller = {
  getById: (req, res) => res.send(`<h1>VOCÊ ESTÁ NA PÁGINA DO PRODUTO DE ID ${req.params.id}</h1>`)
}

module.exports = controller