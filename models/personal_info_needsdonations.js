const { sequelize, DataTypes } = require("./sequelize");

const PersonalInfoNeedsdonations = sequelize.define(
    "personal_info_needsdonations",
    {
        idpersonal_info_needsdonations: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        address: {
            type: DataTypes.STRING,
            //allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            //allowNull: false,
        },
        cell_phone: {
            type: DataTypes.INTEGER,
            //allowNull: false,
        },
        phone_number: {
            type: DataTypes.INTEGER,
            //allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            // allowNull: true,
        },
        preferred_language: {
            type: DataTypes.STRING,
            // allowNull: true,
        },
     
    },
    {
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן ב
    }
);
module.exports = PersonalInfoNeedsdonations;
