const { sequelize, DataTypes } = require("./sequelize");
const Pairs = sequelize.define(
    "pairs",//מקביל לטבלה שלי
    {
        pair_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
        },
        id_donater: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_needsDonation: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן ב
    }
);

module.exports = Pairs;
