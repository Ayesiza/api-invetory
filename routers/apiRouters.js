const express = require('express');
const { registerUser } = require('../controllers/userControllers');
const {  validation } = require('../middlewares/validations')

const router = express.Router()

router.post('/users/signup',validation , registerUser);


module.exports = router;