const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String
    },
    phone: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "personal"
    },
    website: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
