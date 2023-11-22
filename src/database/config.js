import { Sequelize } from 'sequelize/lib/index';
import pg from 'pg'


const sequelize = new Sequelize("postgres://default:nwMt5FXGQce9@ep-floral-grass-11796545.us-east-1.postgres.vercel-storage.com:5432/verceldb", { dialectModule: pg });

export default sequelize