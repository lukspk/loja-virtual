const {Produto} = require('../app/models');
var ProdutoService = require('../service/produto.services')

module.exports = {
    
    async getProducts(request, response){
      return response.json(await ProdutoService.getProdutos());
    },

     async store(request, response) {
      return await ProdutoService.storeProduto(request, response);
    },

    async editar(request, response) {
      return await ProdutoService.editProduto(request, response); 
    },

    async update(request, response) {
      return await ProdutoService.updateProduto(request, response); 
    },

    async delete(request, response) {
      return await ProdutoService.deleteProduto(request, response); 
    }
}