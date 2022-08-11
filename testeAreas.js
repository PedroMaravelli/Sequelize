const { sequelize, Area } = require('./models/index')

async function areaBusca(){
    const area = await Area.findAll()
    console.log(area.map(a => a.toJSON()))
}
areaBusca()