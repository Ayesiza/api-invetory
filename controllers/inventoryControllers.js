const Inventory = require("../models/inventory");
const Category = require("../models/categories");
const Item = require("../models/items");
const db = require("../config");
const { Schema } = require('mongoose');



module.exports = {
    // addStock: async (req,res, next) => {
    //     const  { item,quantity,categoryName } = req.body
    //   const newStock = new Inventory({item,quantity,categoryName});
    //   await newStock.save();
    //   res.status(201).json(newStock);
    
    addStock:(req, res) => {  
    const  { item,quantity,categoryName } = req.body
    const newStock = new Inventory({item,quantity,categoryName})
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

   
     getEntireStock:  (req, res) => {
    //     const inventories =  await Inventory.find({});
    //     res.status(200).json(inventories)

        Inventory.find({}).then((inventory)=> {
            if(inventory) {
                return res.status(200).json({inventory});
            }else{
           return res.status(400).json({ message: "No Inventory found" });
        }
            });
            
     },

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
        
    },
  
     
};
