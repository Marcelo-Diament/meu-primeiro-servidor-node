const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain;charset=utf-8'
  })
  res.end('Servidor funcionando redondinho, ó!')
}).listen(3000, 'localhost', () => console.log('O servidor está rodando...'))