import { Sequelize } from "sequelize";
import {postgress} from 'pg';


const sequelize = new Sequelize('wamyjrzi', 'wamyjrzi','eo-3voK8hX-12FJbtbP6I3kklhUp3rTr',
{
    host:'silly.db.elephantsql.com',
    dialect: postgress
}
);



export default sequelize