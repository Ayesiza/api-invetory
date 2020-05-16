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
    },
    category:
        [
            {categoryId:{type: Schema.Types.ObjectId, ref: 'category'}}
          ] 
  
    
});



module.exports = inventorySchema;

















