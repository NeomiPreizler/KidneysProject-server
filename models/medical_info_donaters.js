const { sequelize, DataTypes } = require("./sequelize");
const Medical_info_donaters = sequelize.define(
    "medical_info_donaters", {
    idmedical_info_donater: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    hight: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: DataTypes.STRING,
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
    high_blood_pressure: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    blood_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    diabetes: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    kidney_diseases: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    keidney_stones: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    hospitalized: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    surgeries_in_the_past: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    heart_or_lung_dysfunction: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    medication_regularly: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    suffer_from_allergies: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    smoked_in_the_past: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    smoking: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    family_with_diabetes: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    family_with_kidney_disease: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    family_with_kidney_stones: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    born_before_37th_week: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    famiy_with_clotting_problems: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },

},
    {
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן ב
    });
module.exports = Medical_info_donaters;






