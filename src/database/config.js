import { Sequelize } from "sequelize";
import pg from 'pg'


const sq = new Sequelize("postgres://default:FuKjMI8D6ZWt@ep-blue-grass-56152755-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require", { dialectModule: pg });

export default sq