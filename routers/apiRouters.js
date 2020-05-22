const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');
const {  validation } = require('../middlewares/validations');
const { addStock, getEntireStock, deleteStock, updateInventory } = require('../controllers/inventoryControllers');
const { addCategory, allCategory, specificCategory } = require('../controllers/categoryController');
const { addItems,  getItemBycategory, newCategoryItem, deleteItem } = require('../controllers/itemControllers');


const router = require('express-promise-router')();
// const router = express.Router()

router.post('/users/auth/signup',validation , registerUser);
router.post('/users/auth/login',loginUser);
router.post('/inventory',  addStock);
router.get('/inventory', getEntireStock);
router.delete('/inventory/:id', deleteStock);
router.put('/inventory/:id', updateInventory);

// category routes
router.post('/inventory/category', addCategory);
router.get('/inventory/categories', allCategory);
router.get('/inventory/category/:id', specificCategory);

// items routes
router.post('/item', addItems);
router.get('/inventory/:categoryId/items', getItemBycategory);
router.post('/inventory/:categoryId/items', newCategoryItem );
router.post('/inventory/:categoryId/itemsId', deleteItem);





    
module.exports = router;
