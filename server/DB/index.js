const mongoose = require("mongoose");
//27017 is Mongo's port
mongoose
    .connect("mongodb://127.0.0.1:27017/cinema", { useNewUrlParser: true })
    .catch((e) => {
        console.error("Connection error", e.message);
    });

const db = mongoose.connection;

module.exports = db;
