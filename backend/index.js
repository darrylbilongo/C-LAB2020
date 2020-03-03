const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Port d'ecoute
var port = process.env.PORT || 8080;
//const uri = process.env.SRV_URI;
const uri = "mongodb://localhost:27017/test"; // uri de la db

// Connection à MongoDB
mongoose
  .connect(uri, {useNewUrlParser: true,
                  useCreateIndex: true,
                  useUnifiedTopology: true})
  .then(() => {
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })
})

// Modeles et routage
const postRouter = require('./routes/post')
app.use('/posts', postRouter);

app.get('/', (req, res) => {
  res.send('<h2>Hello World!</h2>')
});

app.listen(port, () => {
  console.log('Example app listening on port ' + port + '!')
});