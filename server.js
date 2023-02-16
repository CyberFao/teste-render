// const express = require('express');

// const app = express();

// const PORT = process.env.PORT || 3000;


// // app.get('/', (req, res) => {
// //     res.send('<h1>Página Inicial</h1>');
// // });


// app.use(express.static('./public'));

// app.listen(PORT, () => {
//     console.log(`Servidor rodando em localhost:${PORT}`);
// });

import express from 'express';
import { networkInterfaces } from 'os';

const nets = networkInterfaces();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

console.log(nets);
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});