const express = require('express');
const app = express();
const port = 3000;

//rota com status 200 OK
app.get('/', (req, res) => {
    res.status(200).send('Requisição bem-sucedida HOJE!');
});

//rota com status 404 NOT FOUND
app.get('/erro', (req, res) => {
    res.status(404).send('Recurso não encontrado!');
});

//rota com status 500 erro interno
app.get('/falha', (req, res) => {
    res.status(500).send('Erro no servidor!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

/*
    inicia com "npm init -y"
    instala "npm install express" - serverzinho local, tipo o xampp q roda o apache
    instalado nodemon como depeendencia de desenvlvimento - monitora o node
    npm install --save-dev nodemon

    adiciona em package.json -> "dev": "nodemon server.js"
*/