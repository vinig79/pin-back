import { Sequelize } from 'sequelize/lib/index';
import pg from 'pg'


const sequelize = new Sequelize("postgres://default:2BAsbf7reutI@ep-black-hill-22594980-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require", { dialectModule: pg });

export default sequelize