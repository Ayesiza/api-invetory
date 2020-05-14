const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');
const {  validation } = require('../middlewares/validations');
const { addStock, addCategory, addItems,entireStock  } = require('../controllers/inventoryControllers');



const router = express.Router()

router.post('/users/auth/signup',validation , registerUser);
router.post('/users/auth/login',loginUser);
router.post('/inventory',  addStock);
router.post('/category', addCategory);
router.post('/item', addItems);
router.get('/inventory', entireStock);



    
module.exports = router;