const express = require('express');
const router = express.Router();
const {findAllUsers, storeUser} = require('../controllers/usersController');

router.use(express.json());

//get all users 
router.get("/all", findAllUsers);

//create user after log in w/ google
router.post('/create', storeUser)

module.exports = router;