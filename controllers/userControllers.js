const User = require("../models/users");
const db = require("../config");
const { signToken } = require("../middlewares/auth");
require ('dotenv').config();

module.exports = {
registerUser: (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user) {
          return res.status(409).json({ message: "User already Exist" });
        } else {
          const newUser = new User({ email, password, firstName, lastName });
          newUser.save().then(() => {
            const token = signToken(newUser);
            return res.status(201).json({ message: "Registered Successifully",token});
          });
        }
      })
      .catch((error) => {
        return res.status(400).json({ message: error.message });
});
  }
  


  
};      











