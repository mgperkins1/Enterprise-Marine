const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const cors = require("./middleware/cors");
const users = require("./routes/users");
const auth = require("./routes/auth");

if (!config.get("jwtPrivateKey")) {
    console.error("FATAL ERROR: jwtPrivateKey not defined.");
    process.exit(1);
}

mongoose
    .connect("mongodb://localhost/enterpriseMarine", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.log("Could not connect to MongoDB", err));

app.use(express.json());
app.use(cors);
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));