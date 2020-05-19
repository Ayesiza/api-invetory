const Inventory = require("../models/inventory");
const Category = require("../models/categories");
const Item = require("../models/items");
const db = require("../config");
const { Schema } = require('mongoose');



module.exports = {
    addItems:(req, res) => {
        const  { itemName, categoryName, price, availability, description,imageUrl} = req.body
        const newItem = new Item({itemName,categoryName, price, availability, description,imageUrl})
       newItem.save()
       .then((item) =>{
           if(item) {
               return res.status(201).json({message:'new stock',  newItem})
            }
       })
       .catch((error) =>{
           console.log(error)
       });   
    } ,
     
};

