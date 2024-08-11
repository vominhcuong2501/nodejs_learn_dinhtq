const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
