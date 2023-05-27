const express = require('express');

const userController = require('../controllers/userCont');

const router = express.Router();

router.get('/users', userController.getUsers);

router.post('/users', userController.postUser);

router.delete('/users/:id', userController.deleteUser);

//router.put('users/:id', )

module.exports = router;