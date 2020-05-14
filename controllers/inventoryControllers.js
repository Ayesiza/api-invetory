const Inventory = require("../models/inventory");
const Category = require("../models/categories");
const Item = require("../models/items");
const db = require("../config");
const { Schema } = require('mongoose');



module.exports = {
    addStock:(req, res) => {   
    const  { categoryName,item, quantity, description } = req.body
    const newStock = new Inventory({categoryName,item, quantity, description})
    newStock.save()
       .then((inventory) =>{
           if(inventory) {
               return res.status(201).json({message:'New stock added',  newStock})
            }
       })
       .catch((error) =>{
           console.log(error)
       }); 
       
    },
    addCategory:(req, res) => {
        const inventoryId = { mongoose:Schema.Types.inventory_id}
        const  {categoryName , description} = req.body
    const newCategory = new Category({categoryName , description,inventoryId})
       newCategory.save()
       .then((category) =>{
           if(category) {
               return res.status(201).json({message:'add Category',  newCategory})
            }
       })
       .catch((error) =>{
           console.log(error)
       }); 
       
    },
    addItems:(req, res) => {
        const categoryId = { mongoose:Schema.Types.category_id};
        const inventoryId = { mongoose:Schema.Types.inventory_id};

        const  { productName, price, availability, description,imageUrl} = req.body
    const newItem = new Item({productName, price, availability, description,imageUrl,categoryId ,inventoryId})
       newItem.save()
       .then((item) =>{
           if(item) {
               return res.status(201).json({message:'new stock',  newItem})
            }
       })
       .catch((error) =>{
           console.log(error)
       }); 
       
    }
};











