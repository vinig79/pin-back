import jwt from "jsonwebtoken"

const verifyUser = (req, res, next) =>{
  const token = req.cookies.token
  if(!token){
    return res.json({error:"voce não está atenticado "})
  }else{
    jwt.verify(token, "jwt-secret-key", (error , decoded ) =>{
      if(error){
        return res.json({error:"Token não esta integra"})
      }else{
        req.dado = decoded.email
        next()
      }
    })
  }
}

export default verifyUser 