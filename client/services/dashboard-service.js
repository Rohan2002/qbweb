const Data = require("../models/data");
require("dotenv").config();
const readline = require("readline");
const fs = require("fs");

async function processLineByLine() {
  var PhoneNumbers = [];
  const fileStream = fs.createReadStream("services/phone.txt");
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    PhoneNumbers.push(parsePhoneNumber(line));
  }
  return PhoneNumbers;
}
function parsePhoneNumber(PhoneNumber) {
  PhoneNumber = PhoneNumber.replace(/\D/g, "");
  // eslint-disable-next-line no-unused-expressions
  PhoneNumber.substring(0, 1) == "1"
    ? (PhoneNumber = PhoneNumber.substring(1))
    : PhoneNumber;

  return "+1" + PhoneNumber;
}
// retrivePhoneNumbers().then(function (result) {
//   console.log(result); // result would be retValue or 'Error'
// });

// var testData = ["+19174984648","+16099338806"];

var dashboard_service = {
  showData: function (req, res) {
    Data.find({}, (err, Student) => {
      var StudentObject = [];
      for (var i = 0; i < Student.length; i++) {
        StudentObject.push(Student[i]);
      }
      res.json(StudentObject);
    });
  },
  sendText: async function (req, res) {
    var testData = [];
    try {
      const response = await processLineByLine();
      testData = response;
    } catch (err) {
      console.log(err);
    }
    const accountSid = process.env.SID;
    const authToken = process.env.AUTH;
    const client = require("twilio")(accountSid, authToken);
    try {
      for (var i = 0; i < testData.length; i++) {
        const MessageResponse = await client.messages.create({
          body: req.body.sender_message,
          from: "+12513143589",
          to: testData[i],
        });
        console.log(MessageResponse.sid);
      }
    } catch (err) {
      console.log(err);
    }
    res.sendStatus(200);
  },
};
module.exports = dashboard_service;
