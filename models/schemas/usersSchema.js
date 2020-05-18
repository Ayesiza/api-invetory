const { Schema } = require('mongoose');

const usersSchema = new Schema({
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
}


});

module.exports = usersSchema;
