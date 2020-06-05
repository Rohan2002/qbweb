const uuidv4 = require("uuid/v4");
const nodemailer = require("nodemailer");
const Data = require("../models/data");
var reg_services = {
  regData: function (req, res) {
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
      sig_name,
      sig_date,
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
      !option3 ||
      !sig_name ||
      !sig_date
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
    data.sig_name = sig_name;
    data.sig_date = sig_date;
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
        if (err)
          return console.log("Message NOT Sent to student !:Registration");
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
  },
  contactMail: function (req, res) {
    const {
      sender_name,
      sender_email,
      sender_tel,
      sender_date,
      sender_message,
    } = req.body;
    const sendID = uuidv4();

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
        return console.log("Message Sent!");
      }
    });
  },
};
module.exports = reg_services;
