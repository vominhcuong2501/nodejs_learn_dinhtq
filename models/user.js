const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    color: { type: String, required: true }
});

userSchema.virtual('profile', { foreignField: "user_id", localField: "_id", ref: "Profiles" })


const User = mongoose.model('User', userSchema);

module.exports = User;