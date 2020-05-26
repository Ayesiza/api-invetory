const { registerUser, loginUser } = require('../controllers/userControllers');
const { addStock, getEntireStock, deleteStock, updateInventory } = require('../controllers/inventoryControllers');
const { addCategory, allCategory, specificCategory } = require('../controllers/categoryController');
const { addItems,  getItemBycategory, newCategoryItem, deleteItem, getSpecificItem } = require('../controllers/itemControllers');
const { validation,checkParamsInPut,getToken, verifyToken } = require('../middlewares/validations')


const router = require('express-promise-router')();


router.post('/users/auth/signup',validation , registerUser);
router.post('/users/auth/login',loginUser);
router.post('/inventory', getToken,verifyToken, addStock);
router.get('/inventory', getToken,verifyToken, getEntireStock);
router.delete('/inventory/:id',  getToken,verifyToken,checkParamsInPut, deleteStock);
router.put('/inventory/:id',  getToken,verifyToken, checkParamsInPut, updateInventory);

// category routes
router.post('/inventory/category',  getToken,verifyToken,addCategory);
router.get('/inventory/categories', getToken,verifyToken,allCategory);
router.get('/inventory/category/:id', getToken,verifyToken,checkParamsInPut, specificCategory);

// items routes
router.post('/inventory/category/item',  getToken,verifyToken,addItems);
router.get('/inventory/:categoryId/items', getToken,verifyToken, getItemBycategory);
router.post('/inventory/:categoryId/items',  getToken,verifyToken,newCategoryItem );
router.get('/inventory/category/items/:itemId', getSpecificItem);
router.delete('/inventory/:categoryId/items/:itemId', deleteItem);


    
module.exports = router;
