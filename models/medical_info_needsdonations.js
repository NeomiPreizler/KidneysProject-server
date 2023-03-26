const { sequelize, DataTypes } = require("./sequelize");

const Medical_info_needsdonations = sequelize.define("medical_info_needsdonations", {
    idmedical_info_needsdonations: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    blood_type: {
        type:DataTypes.ENUM('O+', 'O-','A+','A-','AB+','AB-','B+','B-')
        // allowNull: false,
    },
    height: {
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
        type: DataTypes.DATE,
        //    allowNull: false,
    },
    //היה תרומה בעבר
    past_kidney_donation: {
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
   
},
    {
        timestamps: false,//כשיוצרים מודל אם לא כותבים את זה הוא מכניס אוטומטית עוד 2 שדות נוצר ב ועודכן ב
    });

module.exports = Medical_info_needsdonations;
