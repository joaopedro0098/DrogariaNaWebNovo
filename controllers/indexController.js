
const controller = {
    index: (req, res) => res.render('index', { categorias:[],  promocao:[], maisvendidos:[]})
}

module.exports = controller;