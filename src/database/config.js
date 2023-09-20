import { Sequelize } from "sequelize";


const sequelize = new Sequelize('wamyjrzi', 'wamyjrzi','eo-3voK8hX-12FJbtbP6I3kklhUp3rTr',
{
    host:'silly.db.elephantsql.com',
    dialect: "postgres"
}
);



export default sequelize 