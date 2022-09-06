import express from "express";
import { createUser } from "../controllers/user.controller.js";
import imageHandeler from "../middleware/imagehandeler.js";

const router = express.Router();

router.post('/createUser', imageHandeler, createUser);

export default router;
