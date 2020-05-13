const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const dotenv = require ('dotenv');




dotenv.config();

module.exports = {
   signToken: user => {
      const token = jwt.sign({id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName},
        process.env.SECRETE_KEY,
        {
          expiresIn: "24 hours"
        }
      );
      return token;
    },
   
    
  };
  









  
 

  
