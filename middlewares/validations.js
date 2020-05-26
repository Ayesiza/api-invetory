const Joi = require('@hapi/joi');
const jwt = require("jsonwebtoken");

module.exports = {
    validation(req, res, next) {
        const authSchema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),  
        firstName: Joi.string().trim().min(3).regex(/^[a-zA-Z]+$/).required(),
        lastName: Joi.string().trim().min(3).regex(/^[a-zA-Z]+$/).required()
        
    
        });
        const data = authSchema.validate(req.body);
    
        if (data.error) {
          const resFomart = data.error.details[0].message.replace('"', '').split('"');
          const gotElem = resFomart[0];
          return res.status(400).send({  error: `${gotElem} is required and it must be valid` });
        
        }
        next();
      },
      checkParamsInPut(req, res, next) {
        const checkInput = req.params.id.match(/^[0-9a-fA-F]{24}$/);
        if (!checkInput) return res.status(400).send({ status_code: 400, error: 'parameter should be a valid _id Number' })
        next();
      },
      getToken (req, res, next){
        const bearerHeader = req.headers.authorization;
        if (typeof bearerHeader === 'undefined') return res.status(403).send({ status_code: 403, error: 'provide a token' });
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    
       },
    
       verifyToken(req, res, next){
        jwt.verify(req.token, process.env.SECRETE_KEY, (err, user) => {
            if (err) return res.status(403).json({ error: 403, message: err.message });
            req.userName = user
            next();
          });
       }
      
    };

