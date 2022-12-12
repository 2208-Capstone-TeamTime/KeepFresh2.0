const Users = require('../models/Users');
const mongoose = require('mongoose');

//find all users
module.exports = {
    findAllUsers: (req, res) => {

        Users.find({})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving users."
                });
            });
    },

    storeUser: (req, res) => {
        Users.findOneAndUpdate({ email: req.body.email }, {
            displayName: req.body.displayName,
            email: req.body.email
        }, { upsert: true, new: true }).then((data) => res.status(200).send(data));
    },

};

