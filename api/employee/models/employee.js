
const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  cpf: {
    type: String,
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = { Employee };