const sequelize = require("sequelize");
const Sequelize = require("sequelize");
const dbConfig = require("./config/config.json");
const dbConn = new Sequelize(dbConfig.development);

async function alunos(){
    const query = await dbConn.query("select nome from alunos"
    , sequelize.QueryTypes.SELECT)
    console.log(query)
}
alunos()