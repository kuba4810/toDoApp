
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    login : String,
    password : String,
    mail : String
});

const UserModel = mongoose.model('users',userSchema);

module.exports = UserModel;