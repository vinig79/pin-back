import { Router } from "express";
import { User } from "../database/models.js";

const router = Router();

router.post("/", async (req, res) => {
  const dado = req.body;
  if (dado?.nome) {
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
    } else {
      console.log("passei");
      res.json({ error: "usuario existente" });
    }
  } else {
    console.log("passei");
    res.json({ error: "json vazio" });
  }
  console.log(req.body);
  res.send(await User.findAll());
});

export default router;
