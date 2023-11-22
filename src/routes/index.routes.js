import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  if(1 != 1){
    return res.json({valid: true, email: req.session.userEmail, nome: req.session.userName})
  } else{
    return res.json({valid: false})
  }
});

export default router;