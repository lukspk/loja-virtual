// const connection =  require('../database/connection');
const crypto  = require('crypto');
const produto = require('../models/produto');
// const { Produto } = require('../models/produto');


module.exports = {
    
    async getProducts(request, response){
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para obter um usuário.'
        
        return response.json({id : 1, teste: 2});
        const ongs = await connection('ongs').select('*');
        Pro
        return response.json(ongs);
    },

    async store(request, response) {
        
        const {nome, descricao, imagem, valor} = request.body;
    
        // const id = crypto.randomBytes(4).toString('HEX');
    
        await produto.create({
            nome, descricao,imagem,valor
        })
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