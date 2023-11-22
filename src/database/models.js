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


const Achievement = sequelize.define("achievement", {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  achievements: {
      type: Sequelize.INTEGER
  }
}, {
  tableName: 'achievement',
  timestamps: false
});



User.hasMany(Aulas, { foreignKey: "profId", onDelete: "CASCADE" });
User.hasMany(Achievement, { foreignKey: "userId" });

Aulas.belongsTo(User, { foreignKey: "profId" });

Achievement.belongsTo(User, { foreignKey: "userId" });

(async () => {
    await User.sync();
    await Aulas.sync();
    await Achievement.sync();
})();

export { User, Aulas, Achievement }