const products = require('../databases/products.json')

const controller = {
    listAll: (req, res) => res.render('listProducts', {products}),

    productDetail: (req, res) => {
        const { id } = req.params;

        const prod = products.find(product => product.idProduct == id);

        res.render('productDetail', {prod} )
    }
}

module.exports = controller;