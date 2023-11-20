import { Router } from "express";
import { User } from "../database/models.js";

const router = Router();

router.post("/", async (req, res) => {
  if (!dado?.nome) {
    console.log("passei");
    return res.json({ error: "JSON vazio" });
  }
  
  const user = await User.findOne({
    where: {
      email: dado.email,
    },
  });
  
  if (user == null) {
    await User.create({
      nome: dado.nome,
      email: dado.email,
      senha: dado.password1,
      isprofessor: dado.isprofessor,
    });
    return res.send(await User.findAll());
  } else {
    console.log("passei");
    return res.json({ error: "Email já cadastrado" });
  }
  
});

export default router;
