const {Produto} = require('../app/models');
class GetProdutosService {
    static async get (request) {
        const produto = await Produto.findAll();
        console.log(produto);
        return produto;
    }
}
module.exports = GetProdutosService;