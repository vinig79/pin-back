import { Router } from "express";

import { User, Achievement } from "../database/models";


const router = Router();

router.post("/", async (req, res) => {
  const dado = req.body;
  

  // Função para adicionar uma medalha a um usuário

try {
    // Encontrar o usuário pelo ID
    const usuario = await  User.findOne({
        where: {
          email: dado.email,
        },
      });

    if (!usuario) {
    console.log("Usuário não encontrado");
    return;
    }

    // Criar uma medalha (se não existir)
    const medalha = await Achievement.findOrCreate({
    where: { id: medalhaId },
    defaults: { achievements: 0 }, // Valor inicial, ajuste conforme necessário
    });

    // Adicionar a medalha ao usuário
    await usuario.addAchievement(medalha[0]);

    console.log("Medalha adicionada ao usuário com sucesso!");
} catch (error) {
    console.error("Erro ao adicionar medalha ao usuário:", error);
}


// Exemplo de uso
adicionarMedalhaAoUsuario(1, 1); // Substitua 1 pelo ID do usuário e da medalha desejados
});

export default router;
