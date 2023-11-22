import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  if(req.session.userEmail){
    return res.json({valid: true, email: req.session.userEmail, nome: req.session.userName})
  } else{
    return res.json({valid: false})
  }
});

export default router;