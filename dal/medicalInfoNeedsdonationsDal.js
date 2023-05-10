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
    updateMedicalNeedsDonater=async(userid,body)=>{
       // const {height,weight,antibodies}=body;
        return await MedicalInformation.update(body,{where:{idmedical_info_needsdonations:userid}});
    }
}
const medicalInformationDataAccessor=new medicalInfoNeedsdonationsDal()
module.exports = medicalInformationDataAccessor