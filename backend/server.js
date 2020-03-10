const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(bodyParser.json());

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

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