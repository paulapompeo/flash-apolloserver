
const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
  },
  trade: {
    type: String,
  },
  cnpj: {
    type: String,
  },
  address: {
    type: String,
  },
  // employees: {
  //   type: Array,
  // },
});

const Company = mongoose.model("Company", companySchema);

module.exports = { Company };