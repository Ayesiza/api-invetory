const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');
const {  validation } = require('../middlewares/validations')
const { addStock } = require('../controllers/itemController')

const router = express.Router()

router.post('/users/auth/signup',validation , registerUser);
router.post('/users/auth/login',loginUser);
router.post('/inventory',  addStock);




module.exports = router;