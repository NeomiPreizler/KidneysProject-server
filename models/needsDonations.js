const { sequelize, DataTypes } = require("./sequelize");
const NeedsDonations = sequelize.define(
    "needs_donations",
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        id:{
            type: DataTypes.INTEGER,
            // allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            //allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            //allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            //allowNull: false,
        },

        avaliable: {
            type: DataTypes.TINYINT,
            //allowNull: false,
            defaultValue: 0,
        },
        has_pair: {
            type: DataTypes.TINYINT,
            //allowNull: false,
            defaultValue: 0,
        },

        id_pair: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן    
    });

module.exports = NeedsDonations;
