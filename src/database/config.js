import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'pin',
  username: 'root',
  password: 'root',
  port: 3306,
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

export default sequelize; 
