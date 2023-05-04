const { sequelize, DataTypes } = require("./sequelize");
const Medical_info_donaters = sequelize.define(
    "medical_info_donaters", {
    idmedical_info_donater: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    height: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    weight: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    birthDate: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    gender: {
        type:DataTypes.ENUM('MALE', 'FEMALE'),

        // allowNull: false,
    },
    //לחץ דם גבוה
    high_blood_pressure: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    blood_type: {
        type:DataTypes.ENUM('O+', 'O-','A+','A-','AB+','AB-','B+','B-')
        // type: DataTypes.STRING,
        // allowNull: false,
    },
    // סכרת
    diabetes: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //חולי בכליות
    kidney_diseases: {
        type: DataTypes.BOOLEAN,
        // allowNull: true,
    },
    //אבנים בכליות
    kidney_stones: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //אישפוז
    hospitalized: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //ניתוחים בכליות
    surgeries_in_the_past: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    // או בראות בעיות בלב
    heart_or_lung_dysfunction: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //טיפול תרופתי ממושך
    medication_regularly: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //סובל מאלרגיות
    suffer_from_allergies: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //עישון בעבר
    smoked_in_the_past: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //מעשן
    smoking: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
    //בעיות סוכרת במשפחה
    family_with_diabetes: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    },
   //האם נולד לפני השבוע ה37
    born_before_37th_week: {
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
module.exports = Medical_info_donaters;






