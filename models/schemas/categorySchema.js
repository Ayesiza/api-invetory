const { Schema } =require('mongoose');

const categorySchema = new Schema({
   
    categoryName:String,
    description:String,
    inventory:[
        {inventory_id:{type: Schema.Types.ObjectId, ref: 'inventory'}}
      ]
    
   });

   
   module. exports = categorySchema;