// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const validateProfile = require('../middlewares/validateProfile');

// Define routes and link them to the controller methods
router.get('/', validateProfile, profileController.getProfile);
router.post('/', validateProfile, profileController.createProfile);

module.exports = router;
