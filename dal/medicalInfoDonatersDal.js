const { log } = require('console');
const { DATEONLY } = require('sequelize');
const db = require('../models/index')
// const Donaters = db.donaters
// const PersonalInformation=db.personal_info_donaters
const MedicalInfoDonater=db.medical_info_donaters
class medicalInfoDonatersDal{

    postDonater=async(req,res)=>{
        console.log("medical body",req.body)
        // const {idmedical_info_donater, hight, weight, birthDate,
        //     male_or_female, high_blood_pressure, blood_type,
        //     diabetes, kidney_diseases, keidney_stones,
        //     hospitalized, surgeries_in_the_past,
        //     heart_or_lung_dysfunction, medication_regularly,
        //     suffer_from_allergies, smoked_in_the_past, smoking,
        //     family_with_diabetes, family_with_kidney_disease,
        //     family_with_kidney_stones, born_before_37th_week,
        //     famiy_with_clotting_problems}=req.body;

        // const medical_details = await MedicalInfoDonater.create({idmedical_info_donater,
        //     hight, weight, birthDate,
        //     male_or_female, high_blood_pressure, blood_type,
        //     diabetes, kidney_diseases, keidney_stones,
        //     hospitalized, surgeries_in_the_past,
        //     heart_or_lung_dysfunction, medication_regularly,
        //     suffer_from_allergies, smoked_in_the_past, smoking,
        //     family_with_diabetes, family_with_kidney_disease,
        //     family_with_kidney_stones, born_before_37th_week,
        //     famiy_with_clotting_problems})
        const medical_details = await MedicalInfoDonater.create(req.body)
            res.send(medical_details);
    }
    deleteDonater=async(id_donater)=>{
      return await MedicalInfoDonater.destroy({ where: {idmedical_info_donater:id_donater}});
    }
    updateMedicalDonater=async(req,res)=>{
        const{  hight, weight, birthDate,
            gender, high_blood_pressure, blood_type,
            diabetes, kidney_diseases, keidney_stones,
            hospitalized, surgeries_in_the_past,
            heart_or_lung_dysfunction, medication_regularly,
            suffer_from_allergies, smoked_in_the_past, smoking,
            family_with_diabetes, born_before_37th_week,CT_examination,
            cheast_examination,urine_Test,psychological_evaluation,}=req.body;

            const updatemedicalDonater=await MedicalInfoDonater.update({
                hight, weight, birthDate,
                gender, high_blood_pressure, blood_type,
                diabetes, kidney_diseases, keidney_stones,
                hospitalized, surgeries_in_the_past,
                heart_or_lung_dysfunction, medication_regularly,
                suffer_from_allergies, smoked_in_the_past, smoking,
                family_with_diabetes, born_before_37th_week,CT_examination,
                cheast_examination,urine_Test,psychological_evaluation,},{where: {id:idmedical_info_donater}})
                if (!updatemedicalDonater) {
                    return res.status(400).json({ message: 'medicalDonater not found' })
                }
                res.json(updatemedicalDonater)
    }


}
const donatersMedicalDataAcessor=new medicalInfoDonatersDal()
module.exports = donatersMedicalDataAcessor