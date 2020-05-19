const db = require("../models");
const Link = db.links;

exports.registerLink = (req, res) => {
    const link = {
        lienYoutube: req.body.lienYoutube,
        lienInsta: req.body.lienInsta,
        lienAutre: req.body.lienAutre,
        UserId: req.body.UserId
    }
    Link.create(link)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post in the database."
      });
    })
}

exports.findAll = (req, res) => {
  Link.findAll({ where : {UserId: req.body.UserId} })
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


exports.getLink = (req, res) => {
  const id = req.params.id 

  Link.findOne({
    where: {
      UserId: id
    }
  })
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: "Impossible d'avoir le lien avec l'id" + id
          })
      });
};

exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { UserId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};