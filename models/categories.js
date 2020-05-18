const mongoose = require("mongoose");
const categorySchema =require("./schemas/categorySchema");

const Category = mongoose.model("category", categorySchema);



module.exports = Category;
