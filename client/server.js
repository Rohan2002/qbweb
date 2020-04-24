const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const data = require("./models/data");
//Api router
const router = require("./routers/routes")

// // Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/quaker-bridge.org/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/quaker-bridge.org/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/quaker-bridge.org/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get("/", function (req, res) {
  res.send("Test Route").status(200);
});

//Mongo Handler
const dbRoute = "mongodb+srv://admin:admin@cluster0-uakcu.mongodb.net/test";
//const dbRoute = "mongodb://127.0.0.1:27017/QB";

mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", router);

// app.listen(8080, () => {
//   console.log("Server on Port 8080");
// });

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443);
