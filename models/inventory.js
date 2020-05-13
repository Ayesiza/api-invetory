const mongoose = require("mongoose");
const inventorySchema = require("./schemas/inventorySchema");

const Inventory = mongoose.model("inventory", inventorySchema);



module.exports = Inventory;












