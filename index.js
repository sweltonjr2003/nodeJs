const express = require('express')
const app = express()


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre', (request, response) => {
    response.sendFile(__dirname + '/html/sobre.html')
})

app.get('/blog', (request, response) => {
    response.send('O nosso blog :-D')
})

app.get('/ola/:nome/:cargo/:cor', (request, response) => {
    response.send('Olá ' + request.params.nome + 
    `<br/>Cargo: ${request.params.cargo}` + 
    "<br/>Cor favorita: "+request.params.cor)
})

app.listen(8081, () => {
    console.log('Servidor a rodar na porta url http://localhost:8081')
})