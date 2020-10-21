const app = require('./config/express')();
const routes = require('./routes/routes');
const cors = require('cors');
const port = app.get('port');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')  

app.use(cors());


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

app.use(routes);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// require('./routes/routes')
// require('./routes/routes')