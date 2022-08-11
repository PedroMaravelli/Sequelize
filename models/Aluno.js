module.exports = (sequelize, DataTypes) => {

    const aluno = sequelize.define("Aluno", {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        ano_matricula: DataTypes.INTEGER

    },
        {
            tableName: 'alunos',
            timestamps: false
        })

    return aluno
}