const { Schema } =require('mongoose');

const categorySchema = new Schema({
    categoryName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
    inventory:[
        {type: Schema.Types.ObjectId, ref: 'inventory'}
      ]
    
   });

   
   module. exports = categorySchema;
   