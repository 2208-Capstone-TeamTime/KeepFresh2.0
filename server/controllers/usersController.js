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

    storeUser: async (req, res) => {

        await Users.find({email: req.body.email}).then((data) => data === null)  !== false ? res.status(200).send('User found!') : await Users.create({
             _id: new mongoose.Types.ObjectId,
            displayName: req.body.displayName,
            email: req.body.email
            })
            .then((data) =>res.status(200).send(data))
            .catch(err => {
                res.status(500).send('User ALREADY EXISTS')
            })
        },
    
    };
