const express = require("express");
const bodyParser = require("body-parser");
const apiRouters = require("./routers/apiRouters");
const dotenv = require ('dotenv');

dotenv.config();


const app = express();


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended:true}));

app.use('/api/v1/', apiRouters)






const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});



