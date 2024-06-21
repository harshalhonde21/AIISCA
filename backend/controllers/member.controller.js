import Member from "../models/member.model.js";

// add the member through membership form 
export const createMember = async (req, res) => {
    try {
        const { email, contactNumber, permanentAddress, currentAddress } = req.body;

        const existingMember = await Member.findOne({ $or: [{ email }, { contactNumber }] });
        if (existingMember) {
            return res.status(400).json({ message: "Email or Contact Number already exists" });
        }

        const member = new Member(req.body);
        await member.save();

        res.status(201).json({
            success: true,
            message: "Member created successfully",
            member
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: `The error is ${err.message}`
        });
    }
};

// Get all members
export const getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json({
            success: true,
            members
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
