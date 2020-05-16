const Inventory = require("../models/inventory");
const Category = require("../models/categories");
const Item = require("../models/items");
const db = require("../config");
const { Schema } = require('mongoose');



module.exports = {
    addStock:(req, res) => { 
    const categoryId = { mongoose:Schema.Types.category_id};  
    const  { item,quantity,categoryName, description } = req.body
    const newStock = new Inventory({item,quantity,categoryName, description,categoryId })
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
   
    getEntireStock:(req, res)=> {
        Inventory.find({}).then((inventory)=> {
            if(inventory) {
                return res.status(200).json({inventory});
            }else{
           return res.status(400).json({ message: "No Inventory found" });
        }
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
    } ,
   
    deleteStock:(req, res) =>{
        Inventory.findByIdAndDelete(req.params.id).then((inventory) => {
            if(inventory){
                return res.status(200).json({message:'Inventory deleted'})
            }else{
                return res.status(404).json({message:'inventory of given ID not found'})
            }

        })
    },
    updateInventory:(req, res) =>{
      Inventory.findByIdAndUpdate (req.params.id,req.body,{new:true}).then((inventory)=>{
        if(inventory){
            return res.status(200).json({message:'Inventory updated',inventory})
        }else{
            return res.status(404).json({message:'inventory of given ID not found'})
        }
          
      })
        
    }
     
};








