const Joi = require("joi");
const Regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const createUserValidationSchema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().pattern(Regex).required().messages({"stringpattern.base": "Password should contain at least 8 characters one letter and one number"}),
    email: Joi.string().email().required(),
});

const updateUserValidationSchema = Joi.object()
  .keys({
    password: createUserValidationSchema.extract('password'),
    email: createUserValidationSchema.extract('email'),
  });

module.exports = {createUserValidationSchema, updateUserValidationSchema}