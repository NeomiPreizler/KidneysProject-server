const { log } = require("console");
const { users } = require(".");

const { sequelize } = require("./sequelize")

const applyExtraSetup = () => {

    const { links, circles, pairs, donaters, medical_info_donaters, personal_info_donaters, needs_donations, personal_info_needsdonations, medical_info_needsdonations, users } = sequelize.models;
    donaters.belongsTo(users, { foreignKey: "userId", as: "userDonater" })
    needs_donations.belongsTo(users, { foreignKey: "userId", as: "userNeedsDonation" })
    medical_info_donaters.belongsTo(donaters, { foreignKey: "idmedical_info_donater", as: "donatersMedical" });
    donaters.belongsTo(medical_info_donaters, { foreignKey: "userId", as: "donaterMedical" });
    personal_info_donaters.belongsTo(donaters, { foreignKey: "idpersonal_info_donater", as: "donaterPersonal" });
    donaters.belongsTo(personal_info_donaters, { foreignKey: "userId", as: "donaterPersonal" });


    medical_info_needsdonations.belongsTo(needs_donations, { foreignKey: "idmedical_info_needsdonations", as: "needsDonationsMedical" })
    personal_info_needsdonations.belongsTo(needs_donations, { foreignKey: "idpersonal_info_needsdonations", as: "needsDonationsPersonal" })

    needs_donations.hasOne(medical_info_needsdonations, { foreignKey: "userId", as: "needsDonationsMedical" })
    needs_donations.hasOne(personal_info_needsdonations, { foreignKey: "userId", as: "needsDonationsPersonal" })

    links.hasMany(circles, { foreignKey: "id_circle_inlink", as: "circles" })
    links.belongsTo(donaters, { foreignKey: "id_donater", as: "linked_donater" })
    links.belongsTo(needs_donations, { foreignKey: "id_needsDonation", as: "linked_needer" })
    pairs.belongsTo(needs_donations, { foreignKey: "id_needsDonation", as: "needer_in_pair" })
    pairs.belongsTo(donaters, { foreignKey: "id_donater", as: "donater_in_pair" })
    console.log('ok extra setup');    // links.belongsToMany()
};

module.exports = { applyExtraSetup };