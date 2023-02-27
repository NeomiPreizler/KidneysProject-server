const { sequelize, DataTypes } = require("./sequelize");
const Users = sequelize.define("users", {
    
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        },
    role:{
        allowNull:false,
        type:DataTypes.ENUM('USER', 'ADMIN'),
        defaultValue:'USER'
        },

    // donater:{
    //     type:DataTypes.BOOLEAN,   
    //     allowNull: false

    // },
    // needsDonation:{
    //     type:DataTypes.BOOLEAN,
    //     allowNull: false
    // },
},
    {
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן ב
    });
module.exports = Users;