import { Router } from "express";
import { User } from "..//database/models.js"

const router = Router();


router.get("/", async (req, res) => {
  const user = await User.findAll()
  console.log(user)
  res.json(user);
});

export default router;