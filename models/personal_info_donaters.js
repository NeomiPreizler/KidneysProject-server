const { sequelize, DataTypes } = require("./sequelize");

const PersonalInfoDonaters = sequelize.define(
    "personal_info_donaters",
    {
        idpersonal_info_donater: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        city: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
           // allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            // allowNull: true,
        },
        phone_number: {
            type: DataTypes.INTEGER,
            // allowNull: true,
        },

        cell_phone: {
            type: DataTypes.INTEGER,
            // allowNull: false,
        },
        preferred_language: {
            type: DataTypes.STRING,
            // allowNull: true,
        },
    },
    {
        timestamps: false,
    });

module.exports = PersonalInfoDonaters;



