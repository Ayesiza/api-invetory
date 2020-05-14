const { Schema } = require('mongoose');

const inventorySchema = new Schema({
    item:{
        type:String  
    },
    quantity:{
        type:Number
        
    },
    
    categoryName:{
        type:String  
    },
   
    description:{
        type:String,   
    }
  
    
});



module.exports = inventorySchema;

















