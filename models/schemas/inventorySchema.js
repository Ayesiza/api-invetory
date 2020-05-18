const { Schema } = require('mongoose');

const inventorySchema = new Schema({
    item:{
        type:String,
        required:true 
    },
    quantity:{
        type:Number,
        required:true 
        
    },
    
    categoryName:{
        type:String,
        required:true 

    },
   
   
    category:
        [
            {type: Schema.Types.ObjectId, ref: 'category'}
          ] 
  
    
});



module.exports = inventorySchema;
