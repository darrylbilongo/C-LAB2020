const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer')
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors')
const axios = require('axios')


/* EXPRESS */
const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(cors());

/* MODELS */
const models = require("../backend/models");

/* SOCKET*/
const server = require('http').Server(app);
const io = require('socket.io')(server);

// WARNING: app.listen(80) will NOT work here!
let interval;

io.on('connection', (socket) => {
  console.log('new user connected')

  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => getApiAndEmit(socket), 1000);

  socket.on('message', async data => {
    console.log('I received a private message by ', data.from, ' saying ', data.message, 'to', data.to);
    
    try {
      const Message = models.messages

      const newMessage = await Message.create({
        authorId: data.from,
        message: data.message,
        destinationId: data.to
      })
      io.emit('message', newMessage)
    }
    catch(err) {
      console.log(err)
    }
  });

  socket.on('disconnect', () => {
    io.emit('user disconnected');
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

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

// Gestion des fichiers
app.use(express.static('public'));
app.use('/public', express.static('public'));

const DIR = 'public/files/'

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR)
  },
  filename: function (req, file, cb) {
    idUser = req.body.id;
    //cb(null, idUser + Date.now() + '-' +file.originalname )
    cb(null, idUser + '-' +file.originalname )

    axios.post('http://localhost:8080/contents/', {
      link : DIR + idUser + '-' +file.originalname,
      published: false,
      UserId: idUser
    })
      .then(res => {
        console.log(res.data)
      })
      .catch()
  }
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
     
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })
});

//Routage
const postRouter = require('./routes/posts')
const userRouter = require('./routes/users')
const linkRouter = require('./routes/links')
const messageRouter = require('./routes/messages')
const contentRouter = require('./routes/contents')


app.use('/posts', postRouter);
app.use('/users', userRouter);
app.use('/links', linkRouter);
app.use('/contents', contentRouter)
app.use('/messages', messageRouter)


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


// Lancement du serveur
/*app.listen(port, () => {
  console.log('Example app listening on port ' + port + '!')
});*/

server.listen(port, () => {
  console.log('listening on *:3000');
});
