const mongoose = require("mongoose");

const AssistantSchema = mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },

    mobile: {
      type: Number,
      rquired: true,
    },

    email: {
      type: String,
      required: true,
    },

    salary: {
      type: Number,
      required: true,
      default: 0,
    },

    city: {
      type: String,
      required: true,
      default: null,
    },

    country: {
      type: String,
      required: true,
      default: null,
    },

    department: {
      type: String,
      required: true,
      default: null,
    },

    role: {
      type: String,
      required: true,
      default: null,
    },

    address: {
      type: String,
      default: null,
    },
    dateOfBirth: {
      type: Date,
      required: false,
      default: null,
    },

    hireDate: {
      type: Date,
      default: null,
    },

  },

  {
    timstamps: true,
  }
);

const Assistant = mongoose.model("Product", AssistantSchema);
module.exports = Assistant;
