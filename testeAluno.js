const {sequelize, Aluno}= require('./models/index')


async function buscaAlunos(){
    const al = await Aluno.findByPk(3)
    console.log(al.toJSON())
}
buscaAlunos()