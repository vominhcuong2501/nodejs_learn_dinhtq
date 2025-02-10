// controllers/userController.js

// Simulating a database with an array
let users = [];

const User = require('./../models/user');
const Profile = require('./../models/profile');
const { json } = require('express');


// Controller to get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // Retrieve all users from the database
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

// Controller to create a new user
const createUser = async (req, res) => {
    const { name, email, age, color } = req.body;
    const newUser = new User({ name, email, age, color });

    try {
        const saveUser = await newUser.save();

        const profile = new Profile({ name, email, phone: 'PHONE', address: "ADDRESS", country: "COUNTRY", image: "IMAGE", user_id: saveUser._id });

        const saveProfile = await profile.save();

        res.status(201).json(saveUser.populate('profile'));
    } catch (error) {
        console.log('======', error);
        res.status(500).json({ error: 'Failed to create item' });
    }
};

// Controller to get a single user by index
const getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (userId >= 0 && userId < users.length) {
        res.json(users[userId]);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
};

// Controller to update a user by index
const updateUser = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const { name, email, age, color } = req.body;
    if (userId >= 0 && userId < users.length) {
        users[userId] = { name, email, age, color };
        res.json(users[userId]);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
};

// Controller to delete a user by index
const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (userId >= 0 && userId < users.length) {
        users.splice(userId, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'User not found' });
    }
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
};
