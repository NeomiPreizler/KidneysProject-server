const { log } = require('console');
const { DATEONLY } = require('sequelize');
const db = require('../models/index')
// const Donaters = db.donaters
// const PersonalInformation=db.personal_info_donaters
const MedicalInfoDonater = db.medical_info_donaters
class medicalInfoDonatersDal {

    postDonater = async (body) => {
        console.log("medical body", body)
        
        const medical_details = await MedicalInfoDonater.create(body);
        return (medical_details);
    }

    deleteDonater = async (id_donater) => {
        return await MedicalInfoDonater.destroy({ where: { idmedical_info_donater: id_donater } });
    }
    
    updateMedicalDonater = async (userid, body) => {
        const { height, weight, birthDate,
            gender, high_blood_pressure, blood_type,
            diabetes, kidney_diseases, keidney_stones,
            hospitalized, surgeries_in_the_past,
            heart_or_lung_dysfunction, medication_regularly,
            suffer_from_allergies, smoked_in_the_past, smoking,
            family_with_diabetes, born_before_37th_week, CT_examination,
            cheast_examination, urine_Test, psychological_evaluation } = body;
        console.log("updateMedicalDonaterrrrrrrrrr", height);
        console.log(userid,"useriddddddddddd");
        const updatemedicalDonater = await MedicalInfoDonater.update({
            height, weight, birthDate,
            gender, high_blood_pressure, blood_type,
            diabetes, kidney_diseases, keidney_stones,
            hospitalized, surgeries_in_the_past,
            heart_or_lung_dysfunction, medication_regularly,
            suffer_from_allergies, smoked_in_the_past, smoking,
            family_with_diabetes, born_before_37th_week, CT_examination,
            cheast_examination, urine_Test, psychological_evaluation,
        }, { where: { idmedical_info_donater: userid } })
        console.log("updatemedicalDonater in dal",updatemedicalDonater);
        return updatemedicalDonater;
        // if (!updatemedicalDonater) {
        //     return res.status(400).json({ message: 'medicalDonater not found' })
        // }
        // res.json(updatemedicalDonater)
    }


}
const donatersMedicalDataAcessor = new medicalInfoDonatersDal()
module.exports = donatersMedicalDataAcessor