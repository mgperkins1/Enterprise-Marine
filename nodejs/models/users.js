const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");
const Joi = require("joi");

userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
    return token;
}

const User = mongoose.model("User", userSchema);

function validateUser(user) {
    const schema = {
        username: Joi.string().required().min(4).max(50),
        password: Joi.string().required().min(8).max(255),
        email: Joi.string().require().min(5).max(255).email()
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;