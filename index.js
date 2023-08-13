import express from 'express';
import index from './src/routes/index.routes.js'
import home from './src/routes/home.routes.js'

const app = express();

app.use('/',index);
app.use('/home', home);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});