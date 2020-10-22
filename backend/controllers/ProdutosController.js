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
        
        const {nome, descricao, imagem, valor} = request.body;
            // console.log(nome);
        // const id = crypto.randomBytes(4).toString('HEX');
    

        try {
            //listing messages in users mailbox 
            //   let emailFetch = await gmaiLHelper.getEmails(req.user._doc.profile_id , '/messages', req.user.accessToken)
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

    async update(request, response) {
        await Produto.update({ lastName: "Doe" }, {
            where: {
              uuid: null
            }
          });

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
    },
    async delete(request, response) {
        const {uuid} = request.body;
        await Produto.destroy({
            where: {
              uuid: uuid
            }
          });
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