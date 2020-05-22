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
    newCategoryItem: async (req,res) =>{
        const {categoryId} = req.params;
          const newItem = new Item(req.body);
          const category = await Category.findById(categoryId);
          newItem.category = category;
          await newItem.save();
          category.items.push(newItem);
          await category.save();
          res.status(201).json(newItem)
      },

      getItemBycategory: async(req,res) =>{
        const {categoryId} =req.params;
        const category = await Category.findById(categoryId).populate("items")
        res.status(200).json(category.items)
        
    },
    deleteItem:async (req,res) =>{
            const {itemId } = req.params;
            const item = await Category.findByIdAndDelete(itemId)
            res.status(200).json(item.category)


    }
// deleteStock:(req, res) =>{
//         Inventory.findByIdAndDelete(req.params.id).then((inventory) => {
//             if(inventory){
//                 return res.status(200).json({message:'Inventory deleted'})
//             }else{
//                 return res.status(404).json({message:'inventory of given ID not found'})
//             }

//         })
    
     
};

