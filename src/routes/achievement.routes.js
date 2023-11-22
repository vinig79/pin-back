import { Router } from "express";
import { User, Achievement } from "../database/models.js";
import verifyUser from "../middleware/verifyUser.middleware.js";

const router = Router();

router.get("/", verifyUser, async (req, res) =>{
  const user = await User.findOne({where:{ email: req.dado}})
  const achievement = await user.getAchievements();
  console.log(achievement)
  return res.json(achievement)
})


router.post("/", verifyUser, async (req, res) => {
  try {
    const dado = req.body;
    const trofeuNumero = dado.trofeuNumero;

    if (!trofeuNumero || trofeuNumero < 1 || trofeuNumero > 6) {
      console.log("Número do troféu inválido");
      return res.status(400).send("Número do troféu inválido");
    }

    // Encontrar o usuário pelo e-mail
    const usuario = await User.findOne({
      where: {
        email: req.dado, // Certifique-se de usar o campo de e-mail correto
      },
    });

    if (!usuario) {
      console.log("Usuário não encontrado");
      return res.status(200).send("Usuário não encontrado");
    }

    // Verificar se o usuário já possui a medalha
    const hasAchievement = await usuario.hasAchievement(trofeuNumero);

    if (hasAchievement) {
      console.log("Usuário já possui essa medalha");
      return res.status(200).send("Usuário já possui essa medalha");
    }

    // Encontrar ou criar a medalha
    const [medalha] = await Achievement.findOrCreate({
      where: { achievements: trofeuNumero },
      defaults: { achievements: trofeuNumero },
    });

    // Adicionar a medalha ao usuário
    await usuario.addAchievement(medalha);

    console.log("Medalha adicionada ao usuário com sucesso!");
    res.status(200).send("Medalha adicionada ao usuário com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar medalha ao usuário:", error);
    res.status(200).send("Erro ao adicionar medalha ao usuário");
  }
});


export default router;
