
const Category = require("../models/categories");
const Item = require("../models/items");
const { Schema } = require('mongoose');



module.exports = {
    addCategory:(req, res) => {
       
        const  {categoryName , description} = req.body
    const newCategory = new Category({categoryName , description})
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
 
    allCategory:(req, res)=> {
        Category.find({}).then((category)=> {
            if(category) {
                return res.status(200).json({category});
            }else{
           return res.status(400).json({ message: "No category found" });
        }
            });        
     },

     specificCategory:(req,res) =>{
        Category.findById(req.params.id).then((category)=>{      
        if(category){res.json({status:200, message:'category Found',category}) 
    }else{
        return res.status(404).json({status:404, message:'Category of specific id not found'})
    }  
            })     
         },
     
    
};
