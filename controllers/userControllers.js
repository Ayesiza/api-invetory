const User = require("../models/users");
const db = require("../config");
const { signToken } = require("../middlewares/auth");
const bcrypt = require('bcrypt');
const dotenv = require ('dotenv');

dotenv.config();

db.once("open", () => {
    console.log("Connection Successful... !");
  });
  
  db.on("error", (err) => {
    console.log(err);
  });

module.exports = {
registerUser: (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    // const hashPassword = bcrypt.hashSync(req.body.password, 10);
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user) {
          return res.status(409).json({ message: "User already Exist" });
        } else {
          const newUser = new User({ email, hashPassword, firstName, lastName });
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