import { Sequelize } from 'sequelize';
import pg from 'pg';

const sequelize = new Sequelize({
  dialect: 'postgres',
  protocol: 'postgres',
  dialectModule: pg,
  host: 'ep-floral-grass-11796545-pooler.us-east-1.postgres.vercel-storage.com',
  port: 5432,
  database: 'verceldb',
  username: 'default',
  password: 'nwMt5FXGQce9',
  ssl: {
    require: true,
    rejectUnauthorized: false, // Configuração temporária para lidar com certificados autoassinados (ajuste conforme necessário)
  },
});

export default sequelize;
