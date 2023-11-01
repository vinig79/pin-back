import { Sequelize } from "sequelize/lib/index";
import sequelize from "./config.js";

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    many_achievements:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    isprofessor: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
},

    {
        tableName: 'user',
        timestamps: false
    }
)

const Aulas = sequelize.define('aulas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    {
        tableName: 'aula',
        timestamps: false
    }

)

User.hasMany(Aulas, { foreignKey: "profId", onDelete: "CASCADE " });
Aulas.belongsTo(User, { foreignKey: "profId" });

(async () => {
    await User.sync()
    await Aulas.sync()
})()

export { User, Aulas }