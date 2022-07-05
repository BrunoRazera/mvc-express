const usuarios = require('../models/usuarios');

const usuariosController = {
    get: (req, res) => {
      const { id } = req.params; // Entrada de dados!
      const dados = usuarios.filter((item) => item.id == id); // Chamada para o modelo (busca info.)
      return res.render('user', { dados }); // Saída de dados para a view (template engine)!
  }
}

module.exports = usuariosController;