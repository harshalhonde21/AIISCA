import Contact from '../models/contact.model.js';

export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    if ([firstName, lastName, email, phoneNumber, message].some((field) => field?.trim() === "")) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // const existingContact = await Contact.findOne({ email });

    // if (existingContact) {
    //   return res.status(400).json({ message: "Contact with this email already exists" });
    // }

    const newContact = new Contact({ firstName, lastName, email, phoneNumber, message });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Contact created successfully",
      contact: newContact,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};



export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
