// const S= require("sequelize")
// const db= new S("postgres://localhost:5432/herby",{loggin:false})

// db.sync({force:true}).then(()=>console.log("DB CONNECTED"))

// module.exports= db


const { Sequelize } = require("sequelize");

const db = new Sequelize("herby", null, null, {
  host: "localhost",
  dialect: "postgres",
});
db.sync({force: false}).then(()=>console.log("DB CONNECTED"))

module.exports = db;