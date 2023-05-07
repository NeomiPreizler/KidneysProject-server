
const {Sequelize} = require('sequelize');
const {sequelize}= require('./sequelize');
const {applyExtraSetup} =require('./extra_setup')
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

/////////////// data base - models
db.users=require('./users')
db.links= require('./links')
db.circles= require('./circles')
db.pairs= require('./pairs')
db.donaters = require('./donaters')
db.medical_info_donaters = require('./medical_info_donaters')
db.personal_info_donaters = require('./personal_info_donaters')
db.needsDonations=require('./needsDonations')
db.personal_info_needsdonations=require('./personal_info_needsdonations')
db.medical_info_needsdonations=require('./medical_info_needsdonations')

/////////////// extra setup - conection

applyExtraSetup();
console.log("ok dbbbbbbbbbbb");
//  {force:  true}
db.sequelize.sync({alter: true},{force:  false})//force:false
//,{force:  true}
.then(() => {
console.log('yes re-sync done!')
})
module.exports = db