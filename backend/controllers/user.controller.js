const db = require("../models");
const User = db.users;
const Avis = db.avis;
const Op = db.Sequelize.Op;

// import
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

process.env.SECRET_KEY = 'secret';

exports.register = (req, res) => {
    const userData = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password: req.body.password,
        role: req.body.role,
        description: req.body.description,
        note: 0
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) =>{
                userData.password = hash;
                User.create(userData)
                .then(user => {
                    res.json({
                                message : user.email + ' est enregistré',
                                utilisateur: user
                            })
                })
                .catch(err => {
                    res.status(400).json({message: 'Error: ' + err})
                })
            })
        }
        else{
            res.json({ message: 'Utilisateur déja existant'})
        }
    }).catch(err => {
        res.status(400).json({message: 'Error: ' + err})
    })  
}

exports.login = (req, res) => {

    User.findOne({
        where : {
            email: req.body.email
        }
    })
        .then(user => {
            if(user) {
                if(bcrypt.compare(req.body.password, user.password)){
                    // Mots de Passe compatibles
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    });
                    //res.send(token)
                    res.json({
                        token: token,
                        message: 'Bienvenue!!!',
                    })
                }
                else{
                    //Mots de Passe pas identiques
                    res.status(401).send('Mot de passe éroné')
                    res.json({message: 'Utilisateur avec mot de passe erroné!'})
                }
            }
            else{
                res.json({ message: 'Utilisateur inexistant'})
            }
        })
        .catch(err => {
            res.status(400).json({message: 'Error: ' + err})
        });
    
}

exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Compte supprimé!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer le user avec id=" + id
        });
      });
};

exports.getUser = (req, res) => {
    const id = req.params.id 

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Impossible d'avoir l'utilisateur avec l'id" + id
            })
        });
};


exports.update = (req, res) => {
    const id = req.params.id;
  
    User.update(req.body, {
      where: { id: id }
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

exports.getFiles = (req, res) => {
  const id = req.params.id

  
}

exports.registerAvis = (req, res) => {
  const avis = {
    auteurId: req.body.auteurId,
    contenu: req.body.contenu,
    artisteId: req.body.artisteId,
  }

  Avis.create(avis)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving advices."
    });
  });
}

exports.getAvis = (req, res) => {
  const id = req.query.artisteId
  var condition = {
    artisteId: id 
  }

  Avis.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving advices."
      });
    });
}