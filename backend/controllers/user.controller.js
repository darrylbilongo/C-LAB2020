const db = require("../models");
const User = db.users;
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
        password: req.body.password
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