const mongoose = require("mongoose");
const dotenv = require ('dotenv');

dotenv.config();


 mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true ,
  useUnifiedTopology: true
 })

const db = mongoose.connection;

db.once("open", () => {
    console.log("Connection Successful... !");
  });
  
  db.on("error", (err) => {
    console.log(err);
  });

  

module.exports = db;











