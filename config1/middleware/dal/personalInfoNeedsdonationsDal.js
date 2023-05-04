const { DATEONLY } = require('sequelize');
const db = require('../models/index')
const PersonalNeedsDonation=db.personal_info_needsdonations

class personalInfoNeedsdonationsDal{
    deleteNeedsDonater=async(id)=>{
        return await PersonalNeedsDonation.destroy({ where: {idpersonal_info_donater:id}})

    }
    postPersonal = async(body)=>{  
        const personalInformation = await PersonalNeedsDonation.create(body);
        return personalInformation;
    }  
    updateNeedsDonater= async()=>{}
}
const personalInformationDataAcssor=new personalInfoNeedsdonationsDal()
module.exports = personalInformationDataAcssor
