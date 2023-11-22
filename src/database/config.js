import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  host: 'sql10.freemysqlhosting.net',
  database: 'sql10664177',
  username: 'sql10664177',
  password: 'GgHbFhX5sQ',
  port: 3306,
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

export default sequelize; 
