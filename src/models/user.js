const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Contact = require("./contact");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid.");
        }
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 7
    }
  },
  {
    timestamps: true
  }
);

// Deleting all contacts
userSchema.pre("remove", async function(next) {
  await Contact.deleteMany({ user: this._id });
  next();
});

// Hashing password
userSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

// toJSON
userSchema.methods.toJSON = function() {
  const userObject = this.toObject();

  delete userObject.password;

  return userObject;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
