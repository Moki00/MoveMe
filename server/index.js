// const MongoAtlasServer = require("./mongo.js");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./DB");
const cardRouter = require("./routes/card-router");

const app = express();
// const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
    res.send("Hello!!");
});

app.use("/api", cardRouter);

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running smoothly on ${process.env.PORT}`);
});
////

// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect((err) => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

// our cloud database

// var MongoClient = require("mongodb").MongoClient;
// var url = MongoAtlasServer;
var url = process.env.MongoKey;
// to insert into our cloud database

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("firstTry");
//     var myobj = { image_id: "875098200DDD", image: "donkeyKong" };
//     dbo.collection("firstCollection").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });
