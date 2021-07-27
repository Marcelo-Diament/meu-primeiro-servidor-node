const http = require('http')

http.createServer((req, res) => {
  // res.writeHead(200, {
  //   'Content-Type': 'text/plain;charset=utf-8'
  // })
  // res.end('Servidor funcionando redondinho, ó!')
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  })
  res.end('<h1>Servidor funcionando redondinho, ó!</h1>')
}).listen(3000, 'localhost', () => console.log('O servidor está rodando...'))