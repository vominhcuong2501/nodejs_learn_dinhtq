// controllers/profileController.js
const Profile = require('../models/profile');

// Controller to get all users
const getProfile = async (req, res) => {
    try {
        const profile = await Profile.find();
        console.log('Success');
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};


// create profile
const createProfile = async (req, res) => {
    const { name, email, phone, address, country, image, user_id } = req.body;
    const profile = new Profile({ name, email, phone, address, country, image, user_id });

    try {
        const saveProfile = await profile.save(); // Save the item to the database
        res.status(201).json(saveProfile);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create item' });
    }
};

module.exports = {
    getProfile, createProfile
};
