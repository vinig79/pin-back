import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({server:__dirname});
});

export default router;