import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Routes
import indexRoutes from './src/routes/index.routes.js';
import achievementRoutes from './src/routes/achievement.routes.js';
import registerRoutes from './src/routes/register.routes.js';
import loginRoutes from './src/routes/login.routes.js';

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*', // Permitindo qualquer origem
    methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    credentials: true,
})
);

// Routes
app.use('/', indexRoutes);
app.use('/achievement', achievementRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
