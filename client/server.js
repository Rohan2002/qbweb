const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const secretJSON = require("./secret/secret.json");
const secret = secretJSON["secret-key"];
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
//Api router
const router = require("./routers/routes");

require('dotenv').config();
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
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", router);

var token = "";

router.post("/authenticate", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (username == process.env.USERNAME && password == process.env.PASSWORD) {
    const payload = { username };
    token = jwt.sign(payload, secret, {
      expiresIn: "1h",
    });
    res.cookie(token);
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

const withAuth =  function (req, res, next) {
  console.log(token);
  if (!token) {
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(token, secret, { algorithm: "RS256" }, function (err, decoded) {
      if (err) {
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
};
router.get("/checkToken", withAuth, function (req, res) {
  res.sendStatus(200);
});
// app.listen(8080, () => {
//   console.log("Server on Port 8080");
// });
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443);
