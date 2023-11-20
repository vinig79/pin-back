import { Router } from "express";
import { User } from "../database/models.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const dado = req.body;

    if (!dado?.nome) {
      console.log("passei");
      return res.json({ error: "JSON vazio" });
    }

    const user = await User.findOne({
      where: {
        email: dado.email,
      },
    });

    if (user === null) {
      await User.create({
        nome: dado.nome,
        email: dado.email,
        senha: dado.password1,
        isprofessor: dado.isprofessor,
      });

      // Obtenha e envie todos os usuários após a criação bem-sucedida
      const users = await User.findAll();
      return res.json(users);
    } else {
      console.log("passei");
      return res.json({ error: "Email já cadastrado" });
    }
  } catch (error) {
    console.error("Erro no processamento:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
});

export default router;
