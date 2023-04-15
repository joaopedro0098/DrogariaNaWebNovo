const detalheProduto = []

const controller = {
    detalheProduto: (req, res) => {
        const { id } = req.params
        const prod = detalheProduto.find(produto => produto.idProduto == id);
        res.render('detalheProduto', {prod}) 
    }
}

module.exports = controller; 


