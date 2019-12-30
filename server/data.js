const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    name: String,
    last: String,
    student_age: Number,
    student_gender: String,
    street_name: String,
    city_name: String,
    state_name: String,
    zip_code: Number,
    sEmail:String,
    pEmail:String,
    parent_name: String,
    parent_last_name: String,
    parent_phone: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);