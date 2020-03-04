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

//Modeles et routage
const postRouter = require('./routes/posts')
const userRouter = require('./routes/users')

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('<h2>Hello World!</h2>')
});

app.listen(port, () => {
  console.log('Example app listening on port ' + port + '!')
});