const { DATEONLY } = require('sequelize');
const db = require('../models/index')
const MedicalInformation=db.medical_info_needsdonations
class  medicalInfoNeedsdonationsDal{
    deleteNeedsDonater=async(id)=>{
        return await MedicalInformation.destroy({ where: {idmedical_info_donater:id}});
      }
postMedical = async(req,res)=>{
    const{idmedical_info_needsdonations,blood_type,hight,
        weight,birthDate,male_or_female,cause_of_kidney_failure,
        dialysis_type,dialysis_start_date,
        kidney_transplant_in_the_past,antibodies}=req.body;

    const medicalInformation=await MedicalInformation.create({
        idmedical_info_needsdonations,blood_type,hight,
        weight,birthDate,male_or_female,cause_of_kidney_failure,
        dialysis_type,dialysis_start_date,
        kidney_transplant_in_the_past,antibodies})

    res.send(medicalInformation);
    }
}
const medicalInformationDataAccessor=new medicalInfoNeedsdonationsDal()
module.exports = medicalInformationDataAccessor