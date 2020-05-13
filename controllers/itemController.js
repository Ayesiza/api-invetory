const Item = require("../models/items");
const db = require("../config");
const { Schema } = require('mongoose');


module.exports = {
    addItems:(req, res) => {
        const categoryId = { mongoose:Schema.Types.ObjectId}
        const  { productName, price, availability, description,imageUrl} = req.body
    const newItem = new Item({productName, price, availability, description,imageUrl,categoryId})
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











