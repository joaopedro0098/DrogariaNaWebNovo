const categorias = require('../databases/categorias.json')
const promocao = require('../databases/promocao.json')
const maisvendidos = require('../databases/maisvendidos.json')

const controller = {
    index: (req, res) => res.render('index', { categorias,  promocao, maisvendidos})
}

module.exports = controller;