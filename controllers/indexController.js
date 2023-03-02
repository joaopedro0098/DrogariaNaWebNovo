const categorias = require('../models/categorias.json')
const promocao = require('../models/promocao.json')
const maisvendidos = require('../models/maisvendidos.json')

const controller = {
    index: (req, res) => res.render('index', { categorias,  promocao, maisvendidos})
}

module.exports = controller;