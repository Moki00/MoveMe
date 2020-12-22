const mongoose = require("mongoose");

//const MongoAtlasServer = require("../mongo.js");

//27017 is Mongo's port
mongoose
    .connect(MongoAtlasServer, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((e) => {
        console.error("Connection error", e.message);
    });

const db = mongoose.connection;

db.once("open", () => {
    console.log("MongoDB connection established successfully");
});

module.exports = db;
