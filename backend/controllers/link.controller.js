const db = require("../models");
const User = db.links;
const Op = db.Sequelize.Op;

exports.register = (req, res) => {
    const userData = {
        lienYoutube: req.body.lienYoutube,
        lienInsta: req.body.lienInsta,
        lienAutre: req.body.lienAutre
    }
    .catch(err => {
        res.status(400).json({message: 'Error: ' + err})
    })  
}