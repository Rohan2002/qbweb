const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const nodemailer = require("nodemailer");
const API_PORT = 8080;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = "mongodb+srv://admin:admin@cluster0-uakcu.mongodb.net/test";
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
    option3
  } = req.body;

  if ((!id && id !== 0) || !name|| !last|| !grade|| !student_gender|| !street_name|| !city_name|| !state_name|| !zip_code|| !sEmail|| !student_phone|| !parent_name|| !parent_last_name|| !parent_phone|| !pEmail|| !course_one|| !course_two|| !time_one|| !time_two|| !option1|| !option2|| !option3) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
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
  console.log(sEmail)
  data.save(err => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "qblearninginfo@gmail.com",
        pass: "qbcls2020"
      }
    });
    let mailOptions = {
      from: "qblearninginfo@gmail.com",
      to: `${sEmail}`,
      subject: `QuakerBridge Registration confirmation for ${name} ${last}`,
      html: `Thank You for Registering to QuakerBrige Learning center: Course one : ${course_one}<br/> Time for Course one ${time_one}<br/> Course two : ${course_two}<br/> Time for Course two ${time_two}`
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) return console.log("Message NOT Sent!:Registration");
      return console.log("Message Sent: Registration!");
    });

    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
router.post("/sendEmail", (req, res) => {
  const { sender_name, sender_email, sender_tel, sender_message } = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "qblearninginfo@gmail.com",
      pass: "qbcls2020"
    }
  });
  let mailOptions = {
    from: "qblearninginfo@gmail.com",
    to: "qblearninginfo@gmail.com",
    subject: `QuakerBridge Contact Form Response from ${sender_name}`,
    html: `Name: ${sender_name}<br/> Email: ${sender_email}<br/> Phone: ${sender_tel}<br/> Message: ${sender_message}<br/>`
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) return console.log("Message NOT Sent!");
    return console.log("Message Sent!");
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
