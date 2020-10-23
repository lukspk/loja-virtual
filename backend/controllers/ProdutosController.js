// const connection =  require('../database/connection');
const crypto  = require('crypto');
// const produto = require('../models/produto');
// const { Produto } = require('../app/models')
// const { Produto } = require('./models');
const {Produto} = require('../app/models');
// const { Produto } = require('../models/produto');


module.exports = {
    
    async getProducts(request, response){
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para obter um usuário.'
        
        // return response.json({id : 1, teste: 2});
        // const ongs = await connection('ongs').select('*');
        // Pro
        
        const produto = await Produto.findAll();
        return response.json(produto);
    },

     async store(request, response) {
        console.log(request);
        const {nome, descricao, imagem, valor} = request.body;
            // console.log(nome);
        // const id = crypto.randomBytes(4).toString('HEX');
    

        try {
            //listing messages in users mailbox 
            //   let emailFHGYIKetch = await gmaiLHelper.getEmails(req.user._doc.profile_id , '/messages', req.user.accessToken)
            //   emailFetch = emailFetch.data
            //   res.send(emailFetch)

         Produto.create({nome:
            nome, descricao:descricao,imagem:imagem,valor:valor
        });
            } catch (err) {
                console.log(err.message)
              next(err);
            }

        return response.json({ nome });
        // await connection('ongs').insert({
        //     id,
        //     name,
        //     email,
        //     whatsapp,
        //     city,
        //     uf
        // });
    
        // return response.json({ id });
    },
    async editar(request, response) {
      // console.log(request.params);
      const {uuid} = request.params;
      const produto = await Produto.findAll({
        where: {
          uuid: uuid
        }
      });
      return response.json(produto);
    },

    async update(request, response) {
      const { uuid } = request.params;
      const {nome, descricao, imagem, valor} = request.body;
        await Produto.update({ nome: nome, descricao : descricao, imagem : imagem, valor : valor }, {
            where: {
              uuid: uuid
            }
          });
    
        return response.json({ uuid });
    },
    async delete(request, response) {

      const { uuid } = request.params;
        // const ong_id = request.headers.authorization;

        // const incident = await connection('incidents').where('id', id).select('ong_id').first();

        // if (incident.ong_id != ong_id) {
        //     return response.status(401).json({ error: 'Operation not permitted' }) ;
        // }

        // await connection('incidents').where('id', id).delete();

        

        // const {uuid} = request.body;
        await Produto.destroy({
            where: {
              uuid: uuid
            }
          });
          return response.status(204).send();
        // const {name, email, whatsapp, city, uf} = request.body;
    
        // const id = crypto.randomBytes(4).toString('HEX');
    
        // await connection('ongs').insert({
        //     id,
        //     name,
        //     email,
        //     whatsapp,
        //     city,
        //     uf
        // });
    
        // return response.json({ id });
    }
}