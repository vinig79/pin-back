import express from 'express';
import index from './src/routes/index.routes.js'

const app = express();

app.use('/',index);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});