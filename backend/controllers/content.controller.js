const db = require("../models");
const Content = db.contents;
const Op = db.Sequelize.Op;

// Create and Save a new Content
exports.create = (req, res) => {
    // Validation
  if (!req.body.link) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a content
  const content = {
    id: req.body.id,
    link: req.body.link,
    published: req.body.published ? req.body.published : false,
    UserId: req.body.UserId
  };

  // Save Content in the db
  Content.create(content)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the content in the database."
      });
    });
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Content.findAll({ where : {
      UserId : req.query.UserId
    } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    });
  
};


// Delete a Content with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Content.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Content supprimé!"
          });
        } else {
          res.send({
            message: `Cannot delete Content with id=${id}. Maybe Content was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer le post avec id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Content.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};