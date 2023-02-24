const categorias = require('../models/categorias.json')

const controller = {
    index: (req, res) => res.render('index', { categorias }),
}

module.exports = controller;