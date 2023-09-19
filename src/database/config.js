import { Sequelize } from "sequelize";
import pg from 'pg';

const sequelize = new Sequelize("postgres://default:0WHmhy3gIXRu@ep-jolly-grass-61658089-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb")
//('wamyjrzi', 'wamyjrzi','eo-3voK8hX-12FJbtbP6I3kklhUp3rTr',
//{
//    host:'silly.db.elephantsql.com',
//    dialect: pg
//}
//);



export default sequelize
