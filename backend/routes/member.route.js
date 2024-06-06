import express from "express";
import { createMember, getAllMembers } from "../controllers/member.controller.js";

const router = express.Router();

router.post("/add-member", createMember);
router.get("/get-member", getAllMembers);

export default router;
