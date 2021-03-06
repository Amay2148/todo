const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('web', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false,
  operatorsAliases: 0,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})




db.sequelize = sequelize
db.Sequelize = Sequelize

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})




module.exports = db
