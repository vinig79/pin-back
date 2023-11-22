import { Router } from "express";

import verifyUser from "../middleware/verifyUser.middleware.js";
const router = Router();

router.get("/", verifyUser ,(req, res) => {
  return res.json({valid: true})
});

export default router;