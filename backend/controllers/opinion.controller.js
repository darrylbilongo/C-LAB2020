const db = require("../opinion");
const Opinion = db.opinion;

exports.create = (req, res) => {
    // Validation
  if (!req.body.opinion) {
    res.status(400).send({
      opinion: "Content can not be empty!"
    });
    return;
  }

  // Create a Message
  const opinion = {
    authorId: req.body.authorId,
    opinion: req.body.opinion
  };

  // Save Post in the db
  Opinion.create(opinion)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        opinion:
          err.opinion || "Some error occurred while creating the opinion in the database."
      });
    });
  
};

exports.findAll = (req, res) => {

    const authorId = req.body.authorId
    const id = req.params.id

    const condition = {
        authorId : authorId,
    }
  
    Opinion.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          opinion:
            err.opinion || "Some error occurred while retrieving tutorials."
        });
      });
};