const { sequelize, DataTypes } = require("./sequelize");
const Donaters = sequelize.define("donaters", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avaliable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    has_pair: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_pair:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
    {
        
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן ב
    });

module.exports = Donaters;

