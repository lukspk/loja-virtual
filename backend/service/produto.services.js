const {Produto} = require('../app/models');

exports.getProdutos = async function() {
 
    try {
        const produto = await Produto.findAll();
        return produto;
    } catch (e) {
        console.log(e);
        throw Error('Erro ao buscar produtos')
    }
}

exports.storeProduto = async function(request, response) {
    const {nome, descricao, imagem, valor} = request.body;
  
        try {
          Produto.create({
              nome : nome, 
              descricao : descricao,
              imagem : imagem,
              valor : valor
          });
        } catch (err) {
            console.log(err.message)
            next(err);
        }

        return response.json({ nome });
}

exports.editProduto = async function(request,response) {
    try {
        const {uuid} = request.params;
      const produto = await Produto.findAll({
        where: {
          uuid: uuid
        }
      });
      return response.json(produto);
    } catch (e) {
        console.log(e);
        throw Error('Erro ao Buscar Produto')
    }
}

exports.updateProduto = async function(request,response) {
    try {
        const { uuid } = request.params;
        const {nome, descricao, imagem, valor} = request.body;
        await Produto.update({ nome: nome, descricao : descricao, imagem : imagem, valor : valor }, {
            where: {
              uuid: uuid
            }
          });
    
        return response.json({ uuid });
    } catch (e) {
        console.log(e);
        throw Error('Erro ao atualizar Produto')
    }
}

exports.deleteProduto = async function(request, response) {
    try {
        const { uuid } = request.params;
   
        await Produto.destroy({
            where: {
              uuid: uuid
            }
          });
          return response.status(204).send();
    } catch (e) {
        console.log(e);
        throw new Error('Erro ao deletar produto')
    }
}

// exports.deleteUsers = async function(req) {
//     try {
//         const { userId } = req.params;
//         const deleted = await models.User.destroy({
//             where: { id: userId }
//         });
//         return deleted
//     } catch (error) {
//         throw new Error('User not found')
//     }
// }