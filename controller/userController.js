// controllers/userController.js

// Simulating a database with an array
let users = [];

// Controller to get all users
const getAllUsers = (req, res) => {
    res.json(users);
};

// Controller to create a new user
const createUser = (req, res) => {
    const { name, email, age, color } = req.body;
    const newUser = { name, email, age, color };
    users.push(newUser);
    res.status(201).json(newUser);
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
