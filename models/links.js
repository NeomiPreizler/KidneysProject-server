const { sequelize, DataTypes } = require("./sequelize");
const Links = sequelize.define("links", {
    id_circle_inlink: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
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
    });
module.exports = Links;
