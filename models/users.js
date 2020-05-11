const mongoose = require("mongoose");
const usersSchema =require("./schemas/usersSchema");

const Users = mongoose.model("users", usersSchema);



module.exports = Users;

