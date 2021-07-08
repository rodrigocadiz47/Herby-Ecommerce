const { Sequelize } = require("sequelize");

const db = new Sequelize("herby", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
db.sync({ force: false }).then(() => console.log("DB CONNECTED"));

module.exports = db;