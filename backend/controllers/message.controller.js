const db = require("../models");
const Message = db.messages;

exports.create = (req, res) => {
    // Validation
  if (!req.body.message) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Message
  const message = {
    authorId: req.body.authorId,
    destinationId: req.body.destinationId,
    message: req.body.message
  };

  // Save Post in the db
  Message.create(message)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the message in the database."
      });
    });
  
};

exports.findAll = (req, res) => {

    const authorId = req.body.authorId
    const id = req.params.id

    const condition = {
        authorId : authorId,
        destinationId : id
    }
  
    Message.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};