const { log } = require("console");
const { users } = require(".");

const {sequelize} =require("./sequelize")

const applyExtraSetup = () => {
    
    const { links, circles, pairs,donaters,medical_info_donaters,personal_info_donaters,needs_donations, personal_info_needsdonations,medical_info_needsdonations,users} = sequelize.models;

    medical_info_donaters.belongsTo(donaters, { foreignKey: "idmedical_info_donater", as: "donatersMedical" });
    personal_info_donaters.belongsTo(donaters, { foreignKey: "idpersonal_info_donater", as: "donaterPersonal" });
    medical_info_needsdonations.belongsTo(needs_donations,{foreignKey:"id_needs_transplent" ,as:"needsDonationsMedical" } )
    personal_info_needsdonations.belongsTo(needs_donations,{foreignKey:"idpersonal_info_needsdonations" ,as:"needsDonationsPersonal" } )
    links.hasMany(circles,{foreignKey:"id_circle_inlink", as:"circles"})
    links.belongsTo(donaters,{foreignKey:"id_donater",as:"linked_donater"})
    pairs.belongsTo(donaters,{foreignKey:"id_donater",as:"donater_in_pair"})
    links.belongsTo(needs_donations,{foreignKey:"id_needsDonation",as:"linked_needer"})
    pairs.belongsTo(needs_donations,{foreignKey:"id_needsDonation",as:"needer_in_pair"})
    console.log("before userid");
    donaters.belongsTo(users,{foreignKey:"userId",as:"userDonater"})
    needs_donations.belongsTo(users,{foreignKey:"userId",as:"userNeedsDonation"})
    console.log('ok extra setup');    // links.belongsToMany()
};

module.exports={applyExtraSetup};