const { Schema } = require('mongoose');

const inventorySchema = new Schema({
    categoryName:{
        type:String  
    },
    quantity:{
        type:Number
        
    },
    item:{
        type:String  
    },
    description:{
        type:String,   
    }
  
    
});



module.exports = inventorySchema;

















