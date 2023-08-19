import { Sequelize} from "sequelize";
import sequelize from "./config.js";

const User = sequelize.define('user',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf:{
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        senha:{
            type: Sequelize.STRING,
            allowNull: false
        },
        isprofessor:{
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    },

    {
        tableName:'user'
    }
)

const Aulas = sequelize.define('aulas',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName:'aulas'
    }

)
 
User.hasMany(Aulas,{foreignKey:"profId", onDelete:"CASCADE "});
Aulas.belongsTo(User,{foreignKey:"profId"});

(async () =>{
   await User.sync()
   await Aulas.sync()
})()

export {User,Aulas}