import { Router } from "express";
import { User, Achievement } from "../database/models.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const dado = req.body;

    // Encontrar o usuário pelo ID
    const usuario = await User.findOne({
      where: {
        email: dado.email,
      },
    });

    if (!usuario) {
      console.log("Usuário não encontrado");
      return res.status(404).send("Usuário não encontrado");
    }

    // Substitua medalhaId pelo ID da medalha desejada
    const medalhaId = 1;

    // Criar uma medalha (se não existir)
    const [medalha] = await Achievement.findOrCreate({
      where: { id: medalhaId },
      defaults: { achievements: 0 }, // Valor inicial, ajuste conforme necessário
    });

    // Adicionar a medalha ao usuário
    await usuario.addAchievement(medalha);

    console.log("Medalha adicionada ao usuário com sucesso!");
    res.status(200).send("Medalha adicionada ao usuário com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar medalha ao usuário:", error);
    res.status(500).send("Erro ao adicionar medalha ao usuário");
  }
});

export default router;
