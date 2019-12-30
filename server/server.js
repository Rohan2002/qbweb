const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute =
  'mongodb+srv://admin:admin@cluster0-uakcu.mongodb.net/test';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true }, );

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


router.post('/putData', (req, res) => {
  let data = new Data();

  const { id, name, last, student_age, student_gender, street_name, city_name, state_name, zip_code, sEmail, student_phone, parent_name,parent_last_name, parent_phone, pEmail } = req.body;

  data.name = name;
  data.last= last;
  data.student_age = student_age;
  data.street_name = street_name;
  data.student_gender = student_gender;
  data.city_name = city_name;
  data.state_name = state_name;
  data.student_phone = student_phone;
  data.parent_name = parent_name;
  data.parent_last_name = parent_last_name;
  data.parent_phone = parent_phone;
  data.sEmail= sEmail;
  data.pEmail = pEmail;
  data.zip_code = zip_code;
  data.id = id;
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));