const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
let jsonData = require("../client/secret/secret.json");
const secret = jsonData["secret-key"]
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const nodemailer = require("nodemailer");

//Api router
const router = express.Router();

// Certificate
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
// app.get("/", function (req, res) {
//   res.send("Test Route").status(200);
// });

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

router.post("/putData", (req, res) => {
  let data = new Data();
  const {
    id,
    name,
    last,
    grade,
    student_gender,
    street_name,
    city_name,
    state_name,
    zip_code,
    sEmail,
    student_phone,
    parent_name,
    parent_last_name,
    parent_phone,
    pEmail,
    course_one,
    course_two,
    time_one,
    time_two,
    option1,
    option2,
    option3,
  } = req.body;

  if (
    (!id && id !== 0) ||
    !name ||
    !last ||
    !grade ||
    !student_gender ||
    !street_name ||
    !city_name ||
    !state_name ||
    !zip_code ||
    !sEmail ||
    !student_phone ||
    !parent_name ||
    !parent_last_name ||
    !parent_phone ||
    !pEmail ||
    !course_one ||
    !course_two ||
    !time_one ||
    !time_two ||
    !option1 ||
    !option2 ||
    !option3
  ) {
    return res.json({
      success: false,
      error: "INVALID INPUTS",
    });
  }

  data.name = name;
  data.last = last;
  data.grade = grade;
  data.street_name = street_name;
  data.student_gender = student_gender;
  data.city_name = city_name;
  data.state_name = state_name;
  data.student_phone = student_phone;
  data.parent_name = parent_name;
  data.parent_last_name = parent_last_name;
  data.parent_phone = parent_phone;
  data.sEmail = sEmail;
  data.pEmail = pEmail;
  data.zip_code = zip_code;
  data.id = id;
  data.course_one = course_one;
  data.course_two = course_two;
  data.time_one = time_one;
  data.time_two = time_two;
  data.option1 = option1;
  data.option2 = option2;
  data.option3 = option3;
  console.log(sEmail);
  data.save((err) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "qblearninginfo@gmail.com",
        pass: "qbcls2020",
      },
    });
    let mailOptions = {
      from: "qblearninginfo@gmail.com",
      to: `${sEmail}`,
      subject: `QuakerBridge Registration confirmation for ${name} ${last}`,
      html: `Thank You for Registering to QuakerBrige Learning center courses.<br/> <br/> 
              <br/> The first course you have registered for is ${course_one} for the ${time_one} slot.
              <br/> The second course you have registered for is  ${course_two} for the ${time_two} slot.
              <br/> Please contact QuakerBridge Learning Center for an appointment <a href="https://quaker-bridge.org/#/contact">here</a>
              <br/> Thank You
              <br/> Best Wishes,
              <br/> QuakerBridge Learning Center Team
              <br/> <strong>* This is an automated mail, please don't reply to this email.</Strong>`,
    };
    let mailOptions2 = {
      from: "qblearninginfo@gmail.com",
      to: `${pEmail}`,
      subject: `QuakerBridge Registration confirmation for your child ${name} ${last}`,
      html: `Thank You for Registering to QuakerBrige Learning center courses.<br/> <br/> 
      <br/> The first course you have registered for is ${course_one} for the ${time_one} slot.
      <br/> The second course you have registered for is  ${course_two} for the ${time_two} slot.
      <br/> Please contact QuakerBridge Learning Center for an appointment <a href="https://quaker-bridge.org/#/contact">here</a>
      <br/> Thank You
      <br/> Best Wishes,
      <br/> QuakerBridge Learning Center Team
      <br/> <strong>* This is an automated mail, please don't reply to this email.</Strong>`,
    };
    let mailOptions3 = {
      from: "qblearninginfo@gmail.com",
      to: `qblearninginfo@gmail.com`,
      subject: `QuakerBridge Registration confirmation for ${name} ${last}`,
      html: `Thank You for Registering to QuakerBrige Learning center courses.<br/> <br/> 
      <br/> The first course you have registered for is ${course_one} for the ${time_one} slot.
      <br/> The second course you have registered for is  ${course_two} for the ${time_two} slot.
      <br/> Student Phone Number is ${student_phone} and Student Email is ${sEmail}
      <Br/> Parent Phone Number is ${parent_phone} and Parent Email is  ${pEmail}
      <br/> Please contact QuakerBridge Learning Center for an appointment <a href="https://quaker-bridge.org/#/contact">here</a>
      <br/> Thank You
      <br/> Best Wishes,
      <br/> QuakerBridge Learning Center Team
      <br/> <strong>* This is an automated mail, please don't reply to this email.</Strong>`,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) return console.log("Message NOT Sent to student !:Registration");
      return console.log("Message Sent to student: Registration!");
    });
    transporter.sendMail(mailOptions2, (err, data) => {
      if (err) return console.log("Message NOT Sent to parent!:Registration");
      return console.log("Message Sent to parent: Registration!");
    });
    transporter.sendMail(mailOptions3, (err, data) => {
      if (err)
        return console.log("Message NOT Sent to QuakerBridge!:Registration");
      return console.log("Message Sent to QuakerBridge: Registration!");
    });

    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
router.post("/sendEmail", (req, res) => {
  const {
    sender_name,
    sender_email,
    sender_tel,
    sender_date,
    sender_message,
  } = req.body;
  const sendID = 1000;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "qblearninginfo@gmail.com",
      pass: "qbcls2020",
    },
  });
  let mailOptions = {
    from: "qblearninginfo@gmail.com",
    to: "qblearninginfo@gmail.com",
    subject: `QuakerBridge Contact Form Response from ${sender_name}`,
    html: `Name: ${sender_name}<br/> Email: ${sender_email}<br/> Phone: ${sender_tel}<br/> Appointment Date: ${sender_date}<br/> Message: ${sender_message}<br/>`,
  };
  let mailOptions2 = {
    from: "qblearninginfo@gmail.com",
    to: `${sender_email}`,
    subject: `QuakerBridge Contact Form Response from ${sender_name}, [id: ${sendID}]`,
    html: `Thank you for contacting QuakerBridge Learning Center, we will reply to your email or contact you by phone as soon as possible.
          <br/>Name: ${sender_name}
          <br/> Email: ${sender_email}
          <br/> Phone: ${sender_tel}
          <br/> Appointment Date: ${sender_date}
          <br/> Message: ${sender_message}
          <br/> <strong>* This is an automated mail, please don't reply to this email.</Strong>`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return console.log("Message NOT Sent!");
    } else {
      return console.log("Message Sent!");
    }
  });
  transporter.sendMail(mailOptions2, (err, data) => {
    if (err) {
      return console.log("Message NOT Sent!");
    } else {
      sendID++;
      return console.log("Message Sent!");
    }
  });
});

var token = "";

router.post("/authenticate", function (req, res) {
  username = req.body.username;
  password = req.body.password;
  if (username == ("qlc4044@quaker-bridge.com") && password == ("qbcls2020")) {
    const payload = { username };
    token = jwt.sign(payload, secret, {
      expiresIn: "1h",
    });
    res.sendStatus(200);
  }
  else{
    token = ""
    res.sendStatus(500);
  }
});

const withAuth = function(req, res, next) {
  console.log(token);
  if (!token) {
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(token, secret, { algorithm: "RS256" }, function(err, decoded) {
      if (err) {
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
};


router.get("/showData", withAuth, (req, res) => {
  Data.find({}, (err, Student) => {
    var StudentObject = [];
    for (var i = 0; i < Student.length; i++) {
      StudentObject.push(Student[i]);
    }
    res.json(StudentObject);
  });
});
router.get("/checkToken", withAuth, function(req, res) {
  res.sendStatus(200);
});

module.exports = withAuth;

app.use("/api", router);

// app.listen(8080, () => {
//   console.log("Server on Port 8080");
// });

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443);
