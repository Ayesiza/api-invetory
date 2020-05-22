const mongoose = require("mongoose");
mongoose.promise = global.promise;
const dotenv = require ('dotenv');

dotenv.config();


 mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true ,
  useUnifiedTopology: true,
  useFindAndModify:false
 })

const db = mongoose.connection
.then(()=>{
  console.log("Connection Successful... !");
})
.catch(err =>{
  console.log("Connection error!",err);
})


  

module.exports = db;
