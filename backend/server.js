const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

/**
 * Documentation avec swagger
 */
const swaggerDefinition = {
  info : {
    title : 'C-LAB API',
    version: '1.0.0',
    description: 'EndPoints to test'
  },
  host : 'localhost:8080',
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
      type: 'apikey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header'
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req,res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// Port d'ecoute
var port = process.env.PORT || 8080;

// database 
const db = require("../backend/models");
db.sequelize.sync();


//Routage
const postRouter = require('./routes/posts')
const userRouter = require('./routes/users')

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send(`<h2>Hello World!</h2>
            <div>
              <a href="/posts">Lien vers les posts</a><br/>
              <a href="/users">Lien vers les users</a>
            </div>`)
});

// Lancement du serveur
app.listen(port, () => {
  console.log('Example app listening on port ' + port + '!')
});