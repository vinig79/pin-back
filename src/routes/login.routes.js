import { Router } from "express";
import { User } from "../database/models.js";

const router = Router();

router.post("/", async (req, res) => {
  try{
    const dado = req.body;
    if (!dado?.email ) {
      return res.json({ error: "JSON vazio" });
    }

    const user = await User.findOne({
      where: {
        email: dado.email,
      },
    });

    if (user == null){
      return res.json({error: "Usuario não existe"})
    }

    if (dado.password == user.senha){
      return res.json(user)
    } else{
      return
    }


  }catch (error) {
    console.error("Erro no processamento:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
});

export default router;