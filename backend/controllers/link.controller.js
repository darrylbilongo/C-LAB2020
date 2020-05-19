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