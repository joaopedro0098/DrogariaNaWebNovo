const Produto = require("../models/Produto");

const detalheProduto = []

const controller = {
    detalheProduto: (req, res) => {
        const { id } = req.params
        const prod = detalheProduto.find(produto => produto.idProduto == id);
        res.render('detalheProduto', {prod}) 
    },
   
    create: async (req, res) => {
        const {name, description} = req.body;
    
        const newProduct = await Produto.create({name, description});
    
        res.status(200).json({message: 'cadastrado com sucesso'});
    }
}

module.exports = controller; 


