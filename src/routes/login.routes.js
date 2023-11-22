import { Router } from 'express';
import { User } from '../database/models.js';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email)

    // Verifique se o JSON é inválido
    if (!email || !password) {
      return res.json({ error: 'JSON inválido' });
    }

    // Busque o usuário no banco de dados
    const user = await User.findOne({
      where: {
        email,
      },
    });

    // Se o usuário não existir, retorne um erro
    if (!user) {
      return res.json({ error: 'Usuário não existe' });
    }

    // Verifique a senha
    if (password === user.senha) {
      // Crie um token JWT
      const token = jwt.sign({ email: user.email }, 'jwt-secret-key', {
        expiresIn: '1d', // 1 dia de validade
      });

      // Configure o cookie com o token
      res.cookie('token', token, { httpOnly: true });

      // Retorne sucesso
      return res.json({ Status: 'Sucesso' });
    } else {
      // Se a senha estiver incorreta, retorne um erro
      return res.json({ error: 'Senha incorreta' });
    }
  } catch (error) {
    console.error('Erro no processamento:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

export default router;
