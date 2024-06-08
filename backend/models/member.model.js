import mongoose from "mongoose";
import validator from "validator";

// Define the schema
const memberSchema = new mongoose.Schema({
  membershipId: {
    type: String,
    unique: true,
    default: function() {
      return `M-${Math.floor(1000 + Math.random() * 9000)}`; 
    }
  },
  fullName: {
    type: String,
    required: [true, "Full Name is required"]
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["Male", "Female", "Transgender", "Other"]
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Date of Birth is required"]
  },
  category: {
    type: String,
    required: [true, "Category is required"]
  },
  caste: {
    type: String,
    required: [true, "Caste is required"]
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email address"]
  },
  contactNumber: {
    type: String,
    required: [true, "Contact Number is required"],
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: "Contact Number must be exactly 10 digits"
    },
    unique: true
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent Address is required"]
  },
  permanentCity: {
    type: String,
    required: [true, "Permanent City is required"]
  },
  permanentState: {
    type: String,
    required: [true, "Permanent State is required"]
  },
  permanentPincode: {
    type: String,
    required: [true, "Permanent Pincode is required"]
  },
  highestQualification: {
    type: String,
    required: [true, "Highest Qualification is required"],
    enum: ["10th Pass", "12th Pass", "Undergraduate", "Graduate", "Post Graduate", "PhD Scholar", "PhD", "Other"]
  },
  occupation: {
    type: String,
    required: [true, "Occupation is required"]
  },
  currentAddress: {
    type: String,
    required: [true, "Current Address is required"],
    validate: {
      validator: function(v) {
        return v === this.permanentAddress;
      },
      message: "Current Address must be the same as Permanent Address"
    }
  },
  currentCity: {
    type: String,
    required: [true, "Current City is required"]
  },
  currentState: {
    type: String,
    required: [true, "Current State is required"]
  },
  currentPincode: {
    type: String,
    required: [true, "Current Pincode is required"]
  }
});

const Member = mongoose.model("Member", memberSchema);
export default Member;
