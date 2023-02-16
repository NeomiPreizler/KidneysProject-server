const { DATEONLY } = require('sequelize');
const db = require('../models/index')
// const Donaters = db.donaters
// const PersonalInformation=db.personal_info_donaters
const MedicalInformation=db.medical_info_donaters
class DonatersMedicalDataAcessor{

    postDonater=async(donaters_medical_details)=>{
        const medical_details = await MedicalInformation.create(donaters_medical_details)
        return medical_details;
    }
    deleteDonater=async(id_donater)=>{
      return await MedicalInformation.destroy({ where: {id: idmedical_info_donater}});
    }
    updateMedicalDonater=async(req,res)=>{
        const{idmedical_info_donater,
            hight, weight,
            high_blood_pressure,diabetes, 
            kidney_diseases, keidney_stones,
            heart_or_lung_dysfunction,
            suffer_from_allergies,smoking,
            family_with_diabetes, family_with_kidney_disease,
            family_with_kidney_stones,
            famiy_with_clotting_problems}=req.body;
            const updatemedicalDonater=await DonatersMedicalDataAcessor.update({
                hight, weight,high_blood_pressure,diabetes, 
                kidney_diseases, keidney_stones,
                heart_or_lung_dysfunction,
                suffer_from_allergies,smoking,
                family_with_diabetes, family_with_kidney_disease,
                family_with_kidney_stones,
                famiy_with_clotting_problems},{where: {id:idmedical_info_donater}})
                if (!updatemedicalDonater) {
                    return res.status(400).json({ message: 'medicalDonater not found' })
                }
                res.json(updatemedicalDonater)
    }


}
const donatersMedicalDataAcessor=new DonatersMedicalDataAcessor()
module.exports = donatersMedicalDataAcessor