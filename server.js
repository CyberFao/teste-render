const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('<h1>Página Inicial</h1>');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
});