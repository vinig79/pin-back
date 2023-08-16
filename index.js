import express from 'express';
import index from './src/routes/index.routes.js';
import home from './src/routes/home.routes.js';
import register from './src/routes/register.routes.js';
import cors from 'cors';

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.use('/',index);
app.use('/home', home);
app.use('/register',register);


const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});