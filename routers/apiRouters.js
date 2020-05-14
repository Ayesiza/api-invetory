const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');
const {  validation } = require('../middlewares/validations');
const { addStock, addCategory, addItems  } = require('../controllers/inventoryControllers');



const router = express.Router()

router.post('/users/auth/signup',validation , registerUser);
router.post('/users/auth/login',loginUser);
router.post('/inventory',  addStock);
router.post('/category', addCategory);
router.post('/item', addItems);



    
module.exports = router;