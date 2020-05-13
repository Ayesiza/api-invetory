const Inventory = require("../models/inventory");
const db = require("../config");



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
       
    }
};











