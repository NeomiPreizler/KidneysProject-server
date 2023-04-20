const { DATEONLY } = require('sequelize');
const db = require('../models/index')
const MedicalInformation=db.medical_info_needsdonations
class  medicalInfoNeedsdonationsDal{
    deleteNeedsDonater=async(id)=>{
        return await MedicalInformation.destroy({ where: {idmedical_info_donater:id}});
      }
    postMedical = async(body)=>{
        const medicalInformation=await MedicalInformation.create(body);
        return medicalInformation;
    }
}
const medicalInformationDataAccessor=new medicalInfoNeedsdonationsDal()
module.exports = medicalInformationDataAccessor