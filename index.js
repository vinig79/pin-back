import express from 'express';
//routes
import index from './src/routes/index.routes.js';
import achievement from './src/routes/achievement.routes.js';
import register from './src/routes/register.routes.js';
import login from './src/routes/login.routes.js';
import cookieParser from 'cookie-parser';

//db
//import {User, Aulas} from './src/database/models.js'

//middleware
import cors from 'cors';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser)

app.use('/', index);
app.use('/achievement', achievement);
app.use('/register', register);
app.use('/login', login);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});