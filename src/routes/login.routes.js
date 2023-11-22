import { Router } from "express";
import { User } from "../database/models.js";
import jwt from "jsonwebtoken"; 


const router = Router();

router.post("/", async (req, res) => {
  try {
    const dado = req.body;
    if (!dado?.email || !dado?.password) {
      return res.json({ error: "JSON invalido" });
    }

    const user = await User.findOne({
      where: {
        email: dado.email,
      },
    });

    if (user == null) {
      return res.json({ error: "Usuario não existe" });
    }

    if (dado.password == user.senha) {
      const token = jwt.sign({email:user.email}, "jwt-secret-key", {expiresIn: "1d"})
      return res.cookie('token', token)
      
    }
  } catch (error) {
    console.error("Erro no processamento:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
});

export default router;
