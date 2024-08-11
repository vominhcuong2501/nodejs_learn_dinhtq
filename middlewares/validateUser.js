// middlewares/validateUser.js
const Joi = require('joi');

// Define the schema using Joi
const userSchema = Joi.object({
    name: Joi.string().trim().min(1).required().messages({
        'string.empty': 'Name is required and cannot be empty',
        'any.required': 'Name is required'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email',
        'any.required': 'Email is required'
    }),
    age: Joi.number().integer().min(1).required().messages({
        'number.base': 'Age must be a number',
        'number.min': 'Age must be a positive number',
        'any.required': 'Age is required'
    }),
    color: Joi.string().trim().min(1).required().messages({
        'string.empty': 'Color is required and cannot be empty',
        'any.required': 'Color is required'
    }),
});

// Middleware to validate the request body
const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

module.exports = validateUser;
