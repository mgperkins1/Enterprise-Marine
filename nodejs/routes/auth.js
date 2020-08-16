const { User } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const users = await User.find().sort("name");

    if (!users) return res.status(404).send("Users.not found.");

    res.send(users);
});

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid email or password.");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid email or password.");

    const token = user.generateAuthToken();
    res.send(token);
});

function validate(req) {
    const schema = Joi.object({
        password: Joi.string().required().min(8).max(255),
        email: Joi.string().required().min(5).max(255).email()
    });

    return schema.validate(req);
}

module.exports = router;