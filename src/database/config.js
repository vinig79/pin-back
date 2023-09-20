import { Sequelize } from "sequelize";


const sequelize = new Sequelize("postgres://default:0WHmhy3gIXRu@ep-jolly-grass-61658089-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require");

export default sequelize