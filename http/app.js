const http = require('http')

http.createServer((request, response) => {
    response.end('Bem-Vindo ao servidor nodejs que o pai montou B-)')
}).listen(8081, () => console.log('O servidor está a rodar...'))

