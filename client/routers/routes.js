const express = require("express");
const router = express.Router();
const dashBoardService = require("../services/dashboard-service");
const regService = require("../services/reg-service");

router.post("/putData", regService.regData);
router.post("/sendEmail", regService.contactMail);
router.get("/showData", dashBoardService.showData);
router.post("/sendText",dashBoardService.sendText);
module.exports = router;
