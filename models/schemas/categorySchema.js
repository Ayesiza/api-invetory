const { Schema } =require('mongoose');

const categorySchema = new Schema({
    _item :{
        type:mongoose.Schema.Types.ObjectId,
        ref:item
    },
    categoryName:String,
    description:String
    
   });


   module. exports = categorySchema;