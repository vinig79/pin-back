import { Router } from "express";
import { User } from "../database/models.js";

import verifyUser from "../middleware/verifyUser.middleware.js";
const router = Router();

router.get("/", verifyUser , async (req, res) => {
  const email = req.dado
  const user = await User.findOne({
    where: {
      email,
    },
  });

  return res.json({valid: true, email:email, name:user.nome })
});

export default router;