import { Router } from "express";

const router = Router();
const dir = __dirname

router.get("/", (req, res) => {
  res.json({server:dir});
});

export default router;