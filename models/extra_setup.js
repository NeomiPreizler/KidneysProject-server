const { users } = require(".");

const {sequelize} =require("./sequelize")

const applyExtraSetup = () => {
    
    const { links, circles, pairs,donaters,medical_info_donaters,personal_info_donaters,needs_donations, personal_info_needsdonations,medical_info_needsdonations,users} = sequelize.models;
    // console.log(`${needs_donations}`);
    medical_info_donaters.belongsTo(donaters, { foreignKey: "idmedical_info_donater", as: "donaters_" });
    personal_info_donaters.belongsTo(donaters, { foreignKey: "idpersonal_info_donaters", as: "donaters_" });
    medical_info_needsdonations.belongsTo(needs_donations,{foreignKey:"id_needs_transplent" ,as:"needsDonations_" } )
    personal_info_needsdonations.belongsTo(needs_donations,{foreignKey:"idpersonal_info_needsdonations" ,as:"needsDonations_" } )
    links.hasMany(circles,{foreignKey:"id_circle_inlink", as:"circles"})
    links.belongsTo(donaters,{foreignKey:"id_donater",as:"linked_donater"})
    pairs.belongsTo(donaters,{foreignKey:"id_donater",as:"donater_in_pair"})
    links.belongsTo(needs_donations,{foreignKey:"id_needs_transplent",as:"linked_needer"})
    pairs.belongsTo(needs_donations,{foreignKey:"id_needs_transplent",as:"needer_in_pair"})
    donaters.belongsTo(users,{foreignKey:"userName",as:"userDonater"})
    needs_donations.belongsTo(users,{foreignKey:"userName",as:"userNeedsDonation"})
    console.log('ok');    // links.belongsToMany()
};

module.exports={applyExtraSetup};