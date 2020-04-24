const express = require("express");
const router = express.Router();
const dashBoardService = require("../services/dashboard-service");
const regService = require("../services/reg-service");
const jwt = require("jsonwebtoken");
const secretJSON = require("../secret/secret.json");
const secret = secretJSON["secret-key"];

router.post("/putData", regService.regData);
router.post("/sendEmail", regService.contactMail);

var token = "";

router.post("/authenticate", function (req, res) {
  username = req.body.username;
  password = req.body.password;
  if (username == "qlc4044@quaker-bridge.com" && password == "qbcls2020") {
    const payload = { username };
    token = jwt.sign(payload, secret, {
      expiresIn: "1h",
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

const withAuth = function (req, res, next) {
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

router.get("/showData", withAuth, dashBoardService.showData);

router.get("/checkToken", function (req, res) {
  res.sendStatus(200);
});

module.exports = router;
