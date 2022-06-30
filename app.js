// Importando o módulo express
const express = require('express');

// Executamos a função express() para obter as ferramentas
// necessárias para trabalhar com express
const app = express();

// Definindo uma rota de acesso ao sistema
// Parâmetro 1: Caminho ou url da rota
// Parâmetro 2: Callback a ser executado toda vez que
// acessamos a rota
app.get('/', (req, res) => {
  return res.send('Olá Mundo!');
});

// Rota parametrizada, contém informações adicionais na URL (endereço)
// A informação adicional é capturada através do parâmetro da URL, representado na rota pela sintaxe :id
// localhost:3000/usuario/1, O número 1 será armazenado na variável id
const usuarios = require('./models/usuarios');
app.get('/usuario/:id', (req, res) => {
  const { id } = req.params; // Entrada de dados!
  const dados = usuarios.filter((item) => item.id == id); // Chamada para o modelo (busca info.)
  return res.send(dados[0].nome + ' ' + dados[0].idade); // Saída de dados!
});

// Criação da rota com MVC
const usuariosController = require('./controllers/usuarios');
app.get('/usuario/:id', usuariosController.get);

// Disponibilizamos uma porta para que nosso
// computador possa receber mensagens através dela.
// Acessar através do navegador no endereço http://localhost:3000/
// Precisa estar por último no arquivo.
app.listen(3000, () => {
  console.log('Servidor rodando no endereço http://localhost:3000/');
});

