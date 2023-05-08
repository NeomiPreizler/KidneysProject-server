const { sequelize, DataTypes } = require("./sequelize");
const Users = sequelize.define("users", {
    
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true,
    },
    userName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    email:{
        type:DataTypes.STRING,
        },
    role:{
        allowNull:true,
        type:DataTypes.ENUM('DONATER','NEEDSDONATION', 'ADMIN'),
        
        },

},
    {
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן ב
    });
module.exports = Users;