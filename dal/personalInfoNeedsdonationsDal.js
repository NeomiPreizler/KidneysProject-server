const { DATEONLY } = require('sequelize');
const db = require('../models/index')
const PersonalInformation=db.personal_info_needsdonations
class PersonalInformationDataAcssor{
    postPersonal = async(personalData)=>{  

        const PersonalInformation2 = await PersonalInformation.create(personalData)
        return PersonalInformation2;
        
    }  
    updateNeedsDonater= async()=>{}
}
const personalInformationDataAcssor=new PersonalInformationDataAcssor()
module.exports = personalInformationDataAcssor
