import { Router } from "express";
import  jwt  from "jsonwebtoken";

const router = Router();

router.get("/", (req, res) => {
  const token = req.header["access-tonken"]
  if(!token){
    return res.json({error:"Token dont exists"})
  } else{
    jwt.verify(token, "jwtSecretKey", (err, decoded) =>{
      if(err){
        return res.json({error:"Not Authenticate"})
      } else{
        res.json({valid: true})
      }
    })
  }
});

export default router;