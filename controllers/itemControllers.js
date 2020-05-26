const Category = require("../models/categories");
const Item = require("../models/items");
const db = require("../config");

module.exports = {
    addItems:(req, res) => {
        const  { itemName, categoryName, price, availability, description,imageUrl} = req.body
        const newItem = new Item({itemName,categoryName, price, availability, description,imageUrl})
       newItem.save()
       .then((item) =>{
           if(item) {
               return res.status(201).json(newItem)
            }
       })
       .catch((error) =>{
           console.log(error)
       });   
    },
    

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
    getSpecificItem:(req,res) =>{
        Item.findById(req.params.id).then((item)=>{      
        if(item){res.json({status:200, message:'item Found',item}) 
    }else{
        return res.status(404).json({status:404, message:'item of specific id not found'})
    }  
            })     
         },
    

   
    deleteItem:async (req,res) =>{
            const {itemId } = req.params; 
           await Category.items.findByIdAndDelete(itemId)
            res.status(200).json({message:'item deleted'})


    }
  
     
};

