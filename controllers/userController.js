function showLogin (req, res){
    res.render('loginPage')
}

function index (req, res){
    res.send('O aplicativo está funcionando')
};



// todas as páginas que for criada eu coloco o nome da função no module exports

module.exports = {
    index,
    showLogin
};

