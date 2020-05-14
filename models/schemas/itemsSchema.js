const { Schema } = require('mongoose');

const itemsSchema = new Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    availability:{
        type:Boolean,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    inventory: [{Inventory_id:{type:Schema.Types.ObjectId,ref: 'inventory'}}],
    category: [{category_id:{type:Schema.Types.ObjectId,ref: 'category'}}]
});



module.exports = itemsSchema;

















