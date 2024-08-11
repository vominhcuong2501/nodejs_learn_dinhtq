// middlewares/validateUser.js
const Joi = require('joi');

// Define the schema using Joi
const ProfileSchema = Joi.object({
    name: Joi.string().trim().min(1).required().messages({
        'string.empty': 'Name is required and cannot be empty',
        'any.required': 'Name is required'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email',
        'any.required': 'Email is required'
    }),
    phone: Joi.string().trim().min(1).required().messages({
        'string.empty': 'Phone is required and cannot be empty',
        'any.required': 'Phone is required'
    }),
    country: Joi.string().trim().min(1).required().messages({
        'string.empty': 'Country is required and cannot be empty',
        'any.required': 'Country is required'
    }),
    address: Joi.string().trim().min(1).required().messages({
        'string.empty': 'Address is required and cannot be empty',
        'any.required': 'Address is required'
    }),
    image: Joi.string().trim().min(1).required().messages({
        'string.empty': 'Image is required and cannot be empty',
        'any.required': 'Image is required'
    }),
    user_id: Joi.string().trim().min(1).required().messages({
        'string.empty': 'User ID is required and cannot be empty',
        'any.required': 'User ID is required'
    }),

});

// Middleware to validate the request body
const validateUser = (req, res, next) => {
    const { error } = ProfileSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

module.exports = validateUser;
