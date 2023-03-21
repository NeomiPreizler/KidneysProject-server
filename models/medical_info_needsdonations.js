const { sequelize, DataTypes } = require("./sequelize");

const Medical_info_needsdonations = sequelize.define("medical_info_needsdonations", {
    idmedical_info_needsdonations: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    blood_type: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    hight: {
        type: DataTypes.INTEGER,
        //allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        // allowNull: false,
    },
    birthDate: {
        type: DataTypes.DATE,
        //allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM('MALE', 'FEMALE'),
        // allowNull: false,
    },
    //גורם לאי ספיקת כליות
    cause_of_kidney_failure: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    //סוג דיאליזה
    dialysis_type: {
        type: DataTypes.ENUM('HEMODIALYSIS', 'PERITONEAL DIALYSIS'),
        // allowNull: false,
    },
    dialysis_start_date: {
        type: DataTypes.STRING,
        //    allowNull: false,
    },
    //היה תרומה בעבר
    kidney_transplant_in_the_past: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //נוגדנים
    antibodies: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    // תוצאות בדיקת פעימות לב
    heart_rate_check: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    // הערכה פסיכו סוציאליסטית
    psychosocial_assessment: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    // כשיר להליך כירורוגי
    surgical_procedure: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //כשירה CT  בדיקת
    CT_examination: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //בדיקת חזה
    cheast_examination: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    }, 
    //בדיקת שתן
    urine_Test: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //אבחון פסיכולוגי
    psychological_evaluation: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
},
    {
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן ב
    });

module.exports = Medical_info_needsdonations;
