const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
app.use(bodyParser.json())

// Port d'ecoute
var port = process.env.PORT || 8080;
const uri = "mongodb://localhost:27017/test"; 
// uri de la db

// Connection à MongoDB
mongoose
  .connect(uri, {useNewUrlParser: true,
                  useUnifiedTopology: true})
  .then(() => {
    let db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => {
      console.log("Connected to database");
    })
})

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