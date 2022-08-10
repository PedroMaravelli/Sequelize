const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
    const professor = sequelize.define('Prefessor',{
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING
    },
    {
        tableName: 'professores',
        timestamps: false
    })

    return professor
}