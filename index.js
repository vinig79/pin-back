import express from 'express';
import cors from 'cors';
import index from './src/routes/index.routes.js';
import achievement from './src/routes/achievement.routes.js';
import register from './src/routes/register.routes.js';
import login from './src/routes/login.routes.js';
import cookieParser from 'cookie-parser';

const app = express();

// Configuração do middleware para permitir CORS
app.use(cors({
  origin: '*',  // ou você pode especificar a lista de origens permitidas ['http://localhost:3000', 'https://pin-back.vercel.app']
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // permite credenciais (por exemplo, cookies, cabeçalhos de autenticação)
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/', index);
app.use('/achievement', achievement);
app.use('/register', register);
app.use('/login', login);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
