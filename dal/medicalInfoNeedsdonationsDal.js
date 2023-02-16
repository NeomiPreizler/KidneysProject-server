const { DATEONLY } = require('sequelize');
const db = require('../models/index')
const MedicalInformation=db.medical_info_needsdonations
class  MedicalInformationDataAccessor{
postMedical = async(medicalData)=>{  
    const MedicalInformation2=await MedicalInformation.create(medicalData)
    return MedicalInformation2;
    }
}
const medicalInformationDataAccessor=new MedicalInformationDataAccessor()
module.exports = medicalInformationDataAccessor