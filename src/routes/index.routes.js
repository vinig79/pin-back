import { Router } from "express";
import {User} from "..//database/models.js"

const router = Router();


router.get("/", (req, res) => {
  res.json({server:__dirname});
});

export default router;