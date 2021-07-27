const http = require('http')

http.createServer((req, res) => {
  // CONTEÚDO COMO TEXTO SIMPLES
  // res.writeHead(200, {
  //   'Content-Type': 'text/plain;charset=utf-8'
  // })
  // res.end('Servidor funcionando redondinho, ó!')
  // CONTEÚDO COMO HTML
  // res.writeHead(200, {
  //   'Content-Type': 'text/html;charset=utf-8'
  // })
  // res.end('<h1>Servidor funcionando redondinho, ó!</h1>')
  // CONTEÚDO COMO JSON
  // res.writeHead(200, {
  //   'Content-Type': 'application ld/json;charset=utf-8'
  // })
  // res.end('{"code":200,"message":"Servidor funcionando!"}')
  // CONTROLANDO ROTAS
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  })
  switch (req.url) {
    case '/':
      return res.end('<h1>VOCÊ ESTÁ NA HOME</h1>')
    case '/sobre':
      return res.end('<h1>VOCÊ ESTÁ NA PÁGINA SOBRE</h1>')
    case '/produto':
      return res.end('<h1>VOCÊ ESTÁ NA PÁGINA DE PRODUTO</h1>')
    default:
      return res.end(`<h1>NÃO EXISTE ESSA PÁGINA${req.url.toUpperCase().replace(/\/|-/g, ' ')}</h1>`)
  }

}).listen(3000, 'localhost', () => console.log('O servidor está rodando...'))