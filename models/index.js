
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

applyExtraSetup()


// apply()
// console.log(`עיגיעג${db.needsDonations}`);
//     db.links.belongsTo(db.needsDonations,{foreignKey:"id_donater",as:"needsDonations"})
//     console.log(`עיגיעג${db.needsDonations}`);

    // const applyExtraSetup = () => {
    //     console.log(`yfjh${sequelize.models.circles }`);
    //     const { links, circles, pairs,donaters,medical_info_donaters,personal_info_donaters,needsDonations, personal_info_needsdonations,medical_info_needsdonations} = sequelize.models;
        // console.log(`hth${pairs}`);
        // links.belongsTo(needsDonations,{foreignKey:"id_donater",as:"needsDonations"})
        // donaters.belongsTo(pairs,{foreignKey:"id_donater",as:"pairs"})
        // needsDonations.belongsTo(pairs,{foreignKey:"id_needsDonation",as:"pairs"})
        // medical_info_donaters.belongsTo(donaters, { foreignKey: "idmedical_info_donater", as: "donaters" });
        // personal_info_donaters.belongsTo(donaters, { foreignKey: "idpersonal_info_donaters", as: "donaters" });
        // medical_info_needsdonations.belongsTo(needsDonations,{foreignKey:"id_needs_transplent" ,as:"needsDonations" } )
        // personal_info_needsdonations.belongsTo(needsDonations,{foreignKey:"idpersonal_info_needsdonations" ,as:"needsDonations" } )
        // console.log('ok');
    // };


    
  
// console.log(`nhvjhb ${db.needsDonations}`);
;
//  {force:  true}
db.sequelize.sync({alter: true})//force:false

.then(() => {
console.log('yes re-sync done!')
})
module.exports = db