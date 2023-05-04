const { sequelize, DataTypes } = require("./sequelize");
const Circles = sequelize.define("circles", {
    id_circle: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},
    {
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן ב
    });
module.exports = Circles;