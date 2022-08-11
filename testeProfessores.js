const {sequelize, Professor} = require('./models/index')

async function buscaProfessor() {
    const prof = await Professor.findAll({
        where: id = 3
    })
    console.log(JSON.stringify(prof))
}
buscaProfessor()