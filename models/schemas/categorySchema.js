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
    
    items:
       [ {type: Schema.Types.ObjectId, 
            ref: 'items'}
      ]
    
   });

   
   module. exports = categorySchema;
   