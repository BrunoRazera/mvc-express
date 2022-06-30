const usuarios = require('../models/usuarios');

const usuariosController = {
    get: (req, res) => {
    const { id } = req.params; // Entrada de dados!
    const dados = usuarios.filter((item) => item.id == id); // Chamada para o modelo (busca info.)
    return res.send(dados[0].nome + ' ' + dados[0].idade); // Saída de dados!
  }
}

module.exports = usuariosController;