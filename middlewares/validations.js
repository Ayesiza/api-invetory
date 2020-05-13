const Joi = require('@hapi/joi');

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
      }
    };














    
