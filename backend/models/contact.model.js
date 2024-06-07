import mongoose from "mongoose";

const isGoogleEmail = (email) => {
    const googleEmailPattern = /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|googlemail\.com)$/;
    return googleEmailPattern.test(email);
};

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"],
        maxLength: [30, "First name cannot exceed 30 characters"],
        minLength: [1, "First name should have at least 1 character"],
    },
    lastName: {
        type: String,
        required: [true, "Please enter your last name"],
        maxLength: [30, "Last name cannot exceed 30 characters"],
        minLength: [1, "Last name should have at least 1 character"],
    },
    email: {      
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [
            {
                validator: isGoogleEmail,
                message: "Email must be a valid Google email address (e.g., @gmail.com or @googlemail.com)"
            }
        ],
    },
    phoneNumber: {
        type: String,
        required: [true, "Please enter your phone number"],
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: "Phone number must be exactly 10 digits",
        },
    },

    message:{
        type:String,
        required:[true, "enter some message"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
