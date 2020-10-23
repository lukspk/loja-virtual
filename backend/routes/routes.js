const express = require('express');
const ProdutosController = require('../controllers/ProdutosController');

// const OngController = require('./controllers/OngController');
// const IncidentsController = require('./controllers/IncidentController');
// const ProfileController = require('./controllers/ProfileController');
// const SessionController = require('./controllers/SessionController')

const routes = express.Router();
routes.get('/produtos',ProdutosController.getProducts);
routes.get('/produtos/:uuid',ProdutosController.editar);
routes.post('/produtos',ProdutosController.store);
routes.put('/produtos/:uuid',ProdutosController.update);
routes.delete('/produtos/:uuid',ProdutosController.delete);
   

// routes.get('/', function(req, res) {
//      // #swagger.tags = ['User']
//         // #swagger.description = 'Endpoint para obter um usuário.'
//         // #swagger.parameters['id'] = { description: 'ID do usuário.' }
//     res.send('hello world');
//   });
// routes.get('/users/:id', (req, res) => {
// 	      // #swagger.tags = ['User']
//         // #swagger.description = 'Endpoint para obter um usuário.'
//         // #swagger.parameters['id'] = { description: 'ID do usuário.' }

//         /* #swagger.parameters['filtro'] = {
//                description: 'Um filtro qualquer.',
//                type: 'string'
//         } */
// 	const filtro = req.query.filtro

//         return res.status(404).send(false)

//     })
//     routes.get('/teste/:id', (req, res) => {
	    
//         const filtro = req.query.filtro
    
//             return res.status(404).send(false)
    
//         })
// routes.get('/ongs', OngController.index);
// routes.post('/ongs', OngController.create);

// routes.post('/incidents', IncidentsController.create);
// routes.get('/incidents', IncidentsController.index);
// routes.delete('/incidents/:id',IncidentsController.delete);

// routes.get('/profile', ProfileController.index);

// routes.post('/sessions', SessionController.create);

module.exports = routes;