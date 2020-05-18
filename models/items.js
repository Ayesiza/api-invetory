const mongoose = require("mongoose");
const itemsSchema =require("./schemas/itemsSchema");

const Item = mongoose.model("items", itemsSchema);



module.exports = Item;
