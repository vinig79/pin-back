import { Router } from "express";
import sequelize from "../database/config.js";

const router = Router();

router.post("/", async (req, res) => {
    const dado = req.body;
    const user = await User.findOne({where:{
      email : dado.email
    }})
    if (user == null){
      await User.create({
        nome:dado.nome,
        email: dado.email,
        senha: dado.password1,
        isprofessor: dado.isprofessor 
      })
    }
    console.log(req.body);
    res.setStatus(200)
    res.send(await User.findAll())
});

export default router;