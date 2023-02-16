const { sequelize, DataTypes } = require("./sequelize");

const Medical_info_needsdonations = sequelize.define("medical_info_needsdonations", {
    idmedical_info_needsdonations: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    blood_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    male_or_female: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cause_of_kidney_failure: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dialysis_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dialysis_start_date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kidney_transplant_in_the_past: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
    antibodies: {
        type: DataTypes.TINYINT,
        allowNull: false,
    }

},
    {
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן ב
    });

module.exports = Medical_info_needsdonations;
