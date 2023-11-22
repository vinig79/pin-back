import { Router } from "express";


const router = Router();

router.get("/" ,(req, res) => {
  res.clearCookie('token')
  return res.json({Status:"sucess"})
});

export default router;