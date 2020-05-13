const Item = require("../models/items");
const db = require("../config");

module.exports = {
    addStock:(req, res) => {
        const  { productName, price, availability, description,imageUrl,category} = req.body
    const newItem = new Item({productName, price, availability, description,imageUrl,category})
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











